using DiskStoreAPI.Data;
using DiskStoreAPI.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DiskStoreAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        public DataDbContext db;
        public UsersController(DataDbContext db)
        {
            this.db = db;
        }
        // GET: api/<UsersController>
        [HttpGet]
        public IEnumerable<User> GetUsers() => db.Users;    

        // GET api/<UsersController>/5
        [HttpGet("{id}")]
        public User GetUserById(int id) => db.Users.First(user => user.Id == id);

        // POST api/<UsersController>
        [HttpPost]
        public IActionResult PostUser(User user)
        {
            db.Users.Add(user);
            db.SaveChanges();
            return Ok();
        }

        // PUT api/<UsersController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<UsersController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
