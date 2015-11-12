using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Iron.GPS.Logging
{
    public abstract class LoggerWrapperImpl:ILoggerWrapper
    {
        private readonly ILogger _logger;

        public LoggerWrapperImpl(ILogger logger)
        {
            this._logger = logger;
        }

        public virtual ILogger Logger
        {
            get
            {
                return this._logger;
            }
        }
    }
}
