using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Iron.GPS.Logging
{
    public interface ILogger
    {
        string Name
        {
            get;
            set;
        }

        void WriteLog(string logLevel, string message,string detail=null,string methodName=null);

        bool IsEnableFor(int logLevel);
        
    }
}
