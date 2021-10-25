using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TesteCRUD.Models;

namespace TesteCRUD
{
    public class CrudContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public CrudContext(DbContextOptions<CrudContext> options)
            : base(options)
        {
            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .HasKey(x => x.Id).HasName("User_UserId");
        }
    }
}
