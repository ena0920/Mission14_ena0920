using Microsoft.AspNetCore.Mvc;
using Mission14_API.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission14_API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private MovieDBContext context;
        public MovieController(MovieDBContext temp)
        {
            context = temp;
        }
        public IEnumerable<Movies> Get()
        {
            var x = context.Movies
                .Where(m => (m.Edited == true))
                .OrderBy(m => m.Title)
                .ToArray();

            return context.Movies.ToArray();
        }

    }
}
