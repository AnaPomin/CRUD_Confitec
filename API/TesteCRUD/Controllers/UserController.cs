using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TesteCRUD.Models;
using TesteCRUD.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TesteCRUD.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository repository;
        public List<string> errors = new List<string>();

        public UserController(IUserRepository Repository)
        {
            repository = Repository;
        }

        // GET: api/<UserController>
        [HttpGet]
        public IActionResult Get()
        {
            var result = repository.List();
            return Ok(result);
        }

        // POST api/<UserController>
        [HttpPost]
        public IActionResult Post([FromBody] User user)
        {
            errors = new List<string>();
            var result = repository.Insert(user, out errors);

            if (result != null)
            {
                return Ok(result);
            }

            return BadRequest(errors);

        }

        // PUT api/<UserController>/5
        [HttpPut]
        public IActionResult Put([FromBody] User user)
        {
            errors = new List<string>();
            var result = repository.Update(user, out errors);
            
            if (result != null)
            {
                return Ok(result);
            }

            return BadRequest(errors);
        }

        // DELETE api/<UserController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            errors = new List<string>();
            var result = repository.Delete(id, out errors);

            if (result)
            {
                return Ok("Deleted successfully.");
            }

            return BadRequest(errors);
        }
    }
}
