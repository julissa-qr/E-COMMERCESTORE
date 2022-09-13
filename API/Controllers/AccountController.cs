using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class AccountController : BaseApiController
    {
        private readonly UserManager<User> _userManager;
        public AccountController(UserManager<User> userManager)
        {
            _userManager = userManager;

        }

        [HttpPost("login")]
        public async Task<ActionResult<User>> Login(LoginDto loginDto)
        {
            //primero checar si tenemos el usuario en db
            var user = await _userManager.FindByNameAsync(loginDto.Username);
            //ver si la contra coincide dentro de la db
            if(user == null || !await _userManager.CheckPasswordAsync(user, loginDto.Password))
                return Unauthorized();
            
            return user;
        }

        [HttpPost("register")]
        public async Task<ActionResult> Register(RegisterDto registerDto)
        {
            //crear usuario
            var user = new User{UserName = registerDto.Username, Email = registerDto.Email};

            //checar resultados (username puede duplicarse)
            var result = await _userManager.CreateAsync(user, registerDto.Password);

            // si tenemos username duplicado, email no es valido o si pass no cumple con los requisitos
            if(!result.Succeeded)
            {
               foreach (var error in result.Errors)
               {
                    ModelState.AddModelError(error.Code, error.Description);
               }
               return ValidationProblem();
            }
            await _userManager.AddToRoleAsync(user, "Member");

            return StatusCode(201);
        }
    }
}