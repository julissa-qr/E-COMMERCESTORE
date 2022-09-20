using API.DTOs;
using API.Entities;
using AutoMapper;

namespace API.RequestHelpers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            //agregamos los perfiles que queremos hacer auto map
            CreateMap<CreateProductDto, Product>();
            CreateMap<UpdateProductDto, Product>();
        }
    }
}