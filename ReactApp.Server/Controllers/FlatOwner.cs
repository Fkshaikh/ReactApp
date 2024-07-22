using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using app.DataAccess.Repository.IRepository;
using app.utility;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using JwtRegisteredClaimNames = Microsoft.IdentityModel.JsonWebTokens.JwtRegisteredClaimNames;

namespace ReactApp.Server.Controllers;


[Route("[controller]")]
[ApiController]
public class FlatOwner(IUnitOfWork db, IPasswordHasher<app.Models.FlatOwner> passwordHasher,IConfiguration configuration) : Controller
{
    //Get : api/FlatOwner/id
    [HttpGet("{id}")]
    [Authorize]
    public IActionResult Get(int id)
    {   
        Console.WriteLine(id);
        var flatOwner = db.FlatOwner.Get(id);

        return Ok(flatOwner);
    }
    
    //Post : api/FlatOwner/Register
    [HttpPost("Register")]
    public IActionResult Register([FromBody] RegisterOwnerDto body)
    {
        
        var flatOwner = new app.Models.FlatOwner()
        {
            Name = body.Name,
            FlatNumber = body.FlatNumber,
            PhoneNumber = body.PhoneNumber,
            PasswordHash = passwordHasher.HashPassword(null, body.Password)
            
        };
       

        db.FlatOwner.Add(flatOwner);
        db.Save();
        return Ok();
    }
    
    
    //Post : FlatOwner/Login
    [HttpPost("Login")]
    public IActionResult Login([FromBody] LoginDto body)
    {
        var flatOwner = db.FlatOwner.GetAll().FirstOrDefault(x => x.PhoneNumber == body.PhoneNumber);
        if (flatOwner == null)
            return NotFound();
        var result = passwordHasher.VerifyHashedPassword(null!, flatOwner.PasswordHash, body.Password);
        if (result == PasswordVerificationResult.Failed)
            return Unauthorized();

        var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub,
                    configuration["Jwt:Subject"] ?? throw new InvalidOperationException()),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim("id", flatOwner.Id.ToString()),
                new Claim("passwordHash", flatOwner.PasswordHash)


            };
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["Jwt:Key"] ?? throw new InvalidOperationException()));
            var singIn = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken(
                configuration["Jwt:Issuer"] ?? throw new InvalidOperationException(),
                configuration["Jwt:Audience"] ?? throw new InvalidOperationException(),
                claims,
                expires: DateTime.Now.AddHours(1),
                signingCredentials: singIn
                
            );
            var tokenString = new JwtSecurityTokenHandler().WriteToken(token);
            return Ok(new {token = tokenString, user = flatOwner});
            

        
        
    }
    
    
}