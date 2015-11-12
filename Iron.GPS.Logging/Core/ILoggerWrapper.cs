using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Iron.GPS.Logging
{
    public interface ILoggerWrapper
    {
        ILogger Logger
        {
            get;
        }
    }
}
