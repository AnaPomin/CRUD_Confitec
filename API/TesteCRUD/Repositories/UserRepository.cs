using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TesteCRUD.Models;

namespace TesteCRUD.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly CrudContext context;

        public UserRepository(CrudContext Context)
        {
            context = Context;
        }
        public bool Delete(int id, out List<string> errors)
        {
            errors = new List<string>();
            User user = context.Users.Find(id);

            if (user == null)
            {
                errors.Add("User not found.");
                return false;
            }

            context.Users.Remove(user);

            try
            {
                context.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                errors.Add(ex.Message);
                return false;
            }
        }

        public User Insert(User user, out List<string> errors)
        {
            errors = new List<string>();
            if (user.IsValid(out errors))
            {
                context.Users.Add(user);

                try
                {
                    context.SaveChanges();
                    return user;
                }
                catch (Exception ex)
                {
                    errors.Add(ex.Message);
                    return null;
                }                
            }
            return null;
        }

        public List<User> List()
        {
            return context.Users.ToList();
        }

        public User Update(User user, out List<string> errors)
        {
            errors = new List<string>();
            if(user.IsValid(out errors))
            {
                context.Users.Update(user);

                try
                {
                    context.SaveChanges();
                    return user;
                }
                catch (Exception ex)
                {
                    errors.Add(ex.Message);
                    return null;
                }
            }

            return null;
        }
    }
}
