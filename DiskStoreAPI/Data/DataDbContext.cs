using DiskStoreAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace DiskStoreAPI.Data
{
    public class DataDbContext : DbContext
    {
        public DataDbContext(DbContextOptions<DataDbContext> options) : base(options)
        {
        }
        public DbSet<User> Users { get; set; }
        public DbSet<Track> Tracks { get; set; }
    }
}
