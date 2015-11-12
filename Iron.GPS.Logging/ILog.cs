using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Iron.GPS.Logging
{
    public interface ILog
    {
        void Debug(string message, string detail = null, string methodName = null);

        void Debug(Exception exception, string methodName);

        void Error(string message, string detail = null, string methodName = null);

        void Error(Exception exception, string methodName);

        void Info(string message, string detail = null, string methodName = null);

        void Info(Exception exception, string methodName);

        bool IsDebugEnabled
        {
            get;
        }

        bool IsErrorEnabled
        {
            get;
        }

        bool IsInfoEnabled
        {
            get;
        }


    }
}
