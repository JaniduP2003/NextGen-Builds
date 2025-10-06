using Backend_Resourcely.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend_Resourcely.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

         public DbSet<User> Users { get; set; }

        // Make the DbSet virtual for Moq
    }
}