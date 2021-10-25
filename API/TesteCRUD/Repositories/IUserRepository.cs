using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TesteCRUD.Models;

namespace TesteCRUD.Repositories
{
    public interface IUserRepository
    {
        List<User> List();
        User Insert(User user, out List<string> errors);
        bool Delete(int id, out List<string> errors);
        User Update(User user, out List<string> errors);
    }
}
