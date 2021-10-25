    using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using TesteCRUD.Enums;

namespace TesteCRUD.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public DateTime BirthDate { get; set; }
        public EScholarity Scholarity { get; set; }


        public bool IsValid(out List<string> errors)
        {
            errors = new List<string>();

            if (!ValidEmail())
                errors.Add("The email is not valid");

            if (!ValidDate())
                errors.Add("The Birthdate is greater than today");

            if (!ValidScholarity())
                errors.Add("The scholarity informed doenst exist");

            return ValidEmail() && ValidDate() && ValidScholarity();
        }

        private bool ValidEmail()
        {
            return new EmailAddressAttribute().IsValid(this.Email) && !this.Email.EndsWith("."); ;
        }

        private bool ValidDate()
        {
            return this.BirthDate <= DateTime.Now;
        }

        private bool ValidScholarity()
        {
            return Enum.IsDefined(typeof(EScholarity), this.Scholarity);
        }
    }
}
