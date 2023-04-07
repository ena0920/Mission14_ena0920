using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission14_API.Data
{
    public class MovieDBContext : DbContext
    {

        public MovieDBContext (DbContextOptions<MovieDBContext> options) : base(options) { }

        public DbSet<Movies> Movies { get; set; }
    }
}
