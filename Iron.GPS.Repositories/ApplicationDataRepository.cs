using Iron.GPS.DataModels;
using Iron.GPS.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Iron.GPS.Repositories
{
    public class ApplicationDataRepository:IApplicationDataRepository
    {
        public List<ApplicationMenu> GetMenuItems()
        {
            List<ApplicationMenu> menus = new List<ApplicationMenu>();
            ApplicationMenu homeMenu=new ApplicationMenu
            {
                MenuDescription = "Home Page",
                MenuId = Guid.NewGuid(),
                MenuOrder = 1,
                Module = "Main"
            };

            ApplicationMenu aboutMenu = new ApplicationMenu
            {
                MenuDescription = "About Page",
                MenuId = Guid.NewGuid(),
                MenuOrder = 2,
                Module = "Main"
            };

            menus.Add(homeMenu);
            menus.Add(aboutMenu);

            return menus;
        }
    }
}
