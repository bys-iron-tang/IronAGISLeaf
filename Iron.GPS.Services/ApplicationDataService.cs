using Iron.GPS.Common;
using Iron.GPS.DataModels;
using Iron.GPS.Repository.Interfaces;
using Iron.GPS.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Iron.GPS.Services
{
    public class ApplicationDataService:IApplicationDataService
    {
        IApplicationDataRepository appDataRepository;
        public ApplicationDataService()
        {
            appDataRepository = IocContainer.Resolve<IApplicationDataRepository>();

        }

        public List<ApplicationMenu> GetMenuItems()
        {
            return appDataRepository.GetMenuItems();
        }

    }
}
