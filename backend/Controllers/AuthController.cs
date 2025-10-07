using Backend_Resourcely.Data;
using Backend_Resourcely.Dto;
using Backend_Resourcely.Helpers;
using Backend_Resourcely.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;


namespace Backend_Resourcely.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly AppDbContext _context;

    public AuthController(AppDbContext context)
    {
        _context = context;
    }

    // POST: api/auth/register
[HttpPost("register")]
public async Task<IActionResult> Register([FromBody] SignUpReq request)
{
    // Validate input
    if (string.IsNullOrWhiteSpace(request.Email) ||
        string.IsNullOrWhiteSpace(request.Password) ||
        string.IsNullOrWhiteSpace(request.Username))
    {
        return BadRequest(new { error = "Email, password, and username are required." });
    }

    // Check if user already exists
    if (await _context.Users.AnyAsync(u => u.Email == request.Email))
    {
        return BadRequest(new { error = "User with this email already exists." });
    }

    // Hash password
    var (hash, salt) = PasswordHelper.HashPassword(request.Password);

    // Create new user
    var user = new User
    {
        Email = request.Email,
        Username = request.Username,
        PasswordHash = hash,
        PasswordSalt = salt,
        Role = "User",
        CreatedAt = DateTime.UtcNow
    };

    _context.Users.Add(user);
    await _context.SaveChangesAsync();  // save to database 

    return Ok(new { message = "User registered successfully." });
}


    // POST: api/auth/login
    [HttpPost("login")]
public async Task<IActionResult> Login([FromBody] LogInReq request)
{
    var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == request.Email);
    if (user == null || !PasswordHelper.VerifyPassword(request.Password, user.PasswordHash, user.PasswordSalt))
        return Unauthorized(new { error = "Invalid email or password." });

    // Generate JWT token
    var tokenHandler = new System.IdentityModel.Tokens.Jwt.JwtSecurityTokenHandler();
    var key = System.Text.Encoding.ASCII.GetBytes("YOUR_SECRET_KEY"); // replace with actual secret

    var tokenDescriptor = new Microsoft.IdentityModel.Tokens.SecurityTokenDescriptor
    {
        Subject = new System.Security.Claims.ClaimsIdentity(new[]
        {
            new System.Security.Claims.Claim("id", user.Id.ToString()),
            new System.Security.Claims.Claim("role", user.Role)
        }),
        Expires = request.RememberMe 
            ? DateTime.UtcNow.AddDays(30)  // token lasts 30 days if "Remember Me" is checked
            : DateTime.UtcNow.AddHours(2), // token lasts 2 hours otherwise
        SigningCredentials = new Microsoft.IdentityModel.Tokens.SigningCredentials(
            new Microsoft.IdentityModel.Tokens.SymmetricSecurityKey(key), 
            Microsoft.IdentityModel.Tokens.SecurityAlgorithms.HmacSha256Signature)
    };

    var token = tokenHandler.CreateToken(tokenDescriptor);
    var tokenString = tokenHandler.WriteToken(token);

    return Ok(new
    {
        message = "Login successful",
        user = new { user.Id, user.Email, user.Username, user.Role },
        token = tokenString
    });
}

}