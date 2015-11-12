using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Iron.GPS.Logging
{
    public sealed class LogFactory
    {
        private static ILog _currentLog;

        private static object[] _obj = new object[] { };

        private static LogFactory _logFactory;

        private LogFactory()
        {

        }

        public static LogFactory Instance
        {
            get 
            {
                lock (_obj)
                {
                    if (_logFactory == null)
                    {
                        _logFactory = new LogFactory();
                    } 
                }

                return _logFactory;
            }
        }


        public ILog GetLog()
        {
            //this may use for default logger
            //ILogger logger = new Logger();
            //_concreteLog = new LogImpl(logger);
            return null;
        }


        public ILog GetLog(ILogger logger)
        {
            _currentLog=new LogImpl(logger);
            return _currentLog;
        }
    }
}
