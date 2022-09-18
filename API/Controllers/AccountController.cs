using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Extensions;
using API.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{

    public class AccountController : BaseApiController
    {
        //lo que usaremos para interactuar con la base de datos
        private readonly UserManager<User> _userManager;
        private readonly TokenService _tokenService;
        private readonly StoreContext _context;

        public AccountController(UserManager<User> userManager, TokenService tokenService, StoreContext context)
        {
            _context = context;
            _tokenService = tokenService;
            _userManager = userManager;
        }

        //LOGIN
        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
        {
            //primero checar si tenemos el usuario en db
            var user = await _userManager.FindByNameAsync(loginDto.Username);
            //ver si la contra coincide dentro de la db
            if (user == null || !await _userManager.CheckPasswordAsync(user, loginDto.Password))
                return Unauthorized();

            //obtener las ordenes de los usuarios
            var userBasket = await RetrieveBasket(loginDto.Username);
            var anonBasket = await RetrieveBasket(Request.Cookies["customerId"]);

            /* si ya hay un a orden en el servidor y ellos tienen
            una orden anonima, se elimina la orden de usuario y cambia el nombre del customerId
            y de la orden anonima al username*/
            if (anonBasket != null)
            {
                if (userBasket != null) _context.Baskets.Remove(userBasket);
                anonBasket.CostumerId = user.UserName; //se transfiere la orden anonima al usuario
                Response.Cookies.Delete("customerId");
                await _context.SaveChangesAsync();
            }
            //regresa el usuario porque han iniciado sesion satisfactoriamente
            return new UserDto
            {
                Email = user.Email,
                Token = await _tokenService.GenerateToken(user),
                //si tenemos la orden y no tenemos ordenes anonimas, regresa la orden de usuario
                Basket = anonBasket != null ? anonBasket.MapBasketToDto() : userBasket?.MapBasketToDto()
            };
        }

        [HttpPost("register")]
        public async Task<ActionResult> Register(RegisterDto registerDto)
        {
            //crear usuario
            var user = new User { UserName = registerDto.Username, Email = registerDto.Email };

            //checar resultados (username puede duplicarse)
            var result = await _userManager.CreateAsync(user, registerDto.Password);

            // si tenemos username duplicado, email no es valido o si pass no cumple con los requisitos
            if (!result.Succeeded)
            {
                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError(error.Code, error.Description);
                }
                return ValidationProblem();
            }
            //se registra el usuario y lo agregamos como Member
            await _userManager.AddToRoleAsync(user, "Member");
            return StatusCode(201);
        }

        [Authorize]
        [HttpGet("currentUser")]
        public async Task<ActionResult<UserDto>> GetCurrentUser()
        {
            var user = await _userManager.FindByNameAsync(User.Identity.Name);
            var userBasket = await RetrieveBasket(User.Identity.Name);

            return new UserDto
            {
                Email = user.Email,
                Token = await _tokenService.GenerateToken(user),
                Basket = userBasket?.MapBasketToDto()
            };
        }

        private async Task<Basket> RetrieveBasket(string customerId)
        {

            if (string.IsNullOrEmpty(customerId))
            {
                Response.Cookies.Delete("customerId");
                return null;
            }

            return await _context.Baskets
                 .Include(i => i.Items)
                 .ThenInclude(p => p.Product)
                 .FirstOrDefaultAsync(x => x.CostumerId == customerId);
        }

    }
}