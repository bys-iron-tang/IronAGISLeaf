using Iron.GPS.DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Iron.GPS.Repositories.Interfaces
{
    public interface IApplicationDataRepository
    {
        List<ApplicationMenu> GetMenuItems();
    }
}
