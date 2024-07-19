using app.Models;
using Microsoft.EntityFrameworkCore;

namespace app.DataAccess.Data;

public class ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : DbContext(options)
{
    // Define the tables
    //public DbSet<Category> Categories { get; set; }
    public DbSet<FlatOwner> FlatOwners { get; set; }
    public DbSet<PreVisitor> PreVisitors { get; set; }
   
    //Define the seeders
    // protected override void OnModelCreating(ModelBuilder modelBuilder)
    // {
    //     //modelBuilder.Entity<Category>().HasData(
    //     //    new Category { CategoryID = 1, Name = "Action", DisplayOrder = 1 },
    //     //    new Category { CategoryID = 2, Name = "SciFi", DisplayOrder = 2 },
    //     //    new Category { CategoryID = 3, Name = "History", DisplayOrder = 3 }
    //     //);
    // }
    
}