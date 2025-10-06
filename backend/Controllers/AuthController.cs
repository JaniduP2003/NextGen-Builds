using Backend_Resourcely.Data;
using Backend_Resourcely.Dto;
using Backend_Resourcely.Helpers;
using Backend_Resourcely.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
        // Validate input
        if (string.IsNullOrWhiteSpace(request.Email) || string.IsNullOrWhiteSpace(request.Password))
        {
            return BadRequest(new { error = "Email and password are required." });
        }

        // Find user by email
        var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == request.Email);
        if (user == null)
        {
            return Unauthorized(new { error = "Invalid email or password." });
        }

        // Verify password
        bool isValid = PasswordHelper.VerifyPassword(request.Password, user.PasswordHash, user.PasswordSalt);
        if (!isValid)
        {
             return Unauthorized(new { error = "Invalid email or password." });
        }

        // ✅ SUCCESSFUL LOGIN
        // TODO: Generate JWT token here (optional but recommended for real apps)

        return Ok(new
        {
            message = "Login successful.",
            user = new
            {
                user.Id,
                user.Email,
                user.Username,
                user.Role
            }
            // token = "your-jwt-token-here"  ← add later with JWT
        });
    }
}