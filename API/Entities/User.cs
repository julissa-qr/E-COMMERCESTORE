using Microsoft.AspNetCore.Identity;

namespace API.Entities
{ //one to one relationship
    public class User : IdentityUser<int>
    {
        public UserAddress Address { get; set; }
    }
}