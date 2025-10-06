using System;
using Backend_Resourcely.Data;
using Backend_Resourcely.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;


namespace Backend_Resourcely.Helpers;

public class AdminCreator
{
    public static async Task CreateAdminUser(AppDbContext context, string email, string username, string passwword)
    {
        if (await context.Users.AnyAsync(u => u.Email == email))
        {
            Console.WriteLine($"The email '{email}' already exists");
            return;
        }

        var (hash, salt) = PasswordHelper.HashPassword(passwword);

        var adminUser = new User
        {
            Email = email,
            Username = "Admin",
            PasswordHash = hash,
            PasswordSalt = salt,
            Role = "Admin",
            CreatedAt = DateTime.UtcNow
        };

        context.Users.Add(adminUser);
        await context.SaveChangesAsync();

        Console.WriteLine($"Admin user created successfully '{email}'.");
    }

}
