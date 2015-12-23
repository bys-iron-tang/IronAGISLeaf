using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Iron.GPS.DataModels
{
    public class ApplicationMenu
    {
        public Guid MenuId { get; set; }

        public string Module { get; set; }

        public string MenuDescription { get;set;}
        public int MenuOrder { get; set; }
    }
}
