using Microsoft.Practices.EnterpriseLibrary.Common.Configuration;
using Microsoft.Practices.EnterpriseLibrary.Logging;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Iron.GPS.Logging
{
    public class LoggerToFile:ILogger
    {
        public string Name
        {
            get
            {
                return "Enterprise Library Logger";
            }
        }

        private static LogWriter _currentLogWriter;
        private static LogWriter CurrentLogWriter
        {
            get
            {
                if (null == _currentLogWriter)
                {
                    //can use configuration style or backend 
                    IConfigurationSource configSource = ConfigurationSourceFactory.Create();
                    ConfigurationSection configSection = configSource.GetSection("loggingConfiguration");

                    var loggerSource = new LogWriterFactory(configSource);
                    _currentLogWriter = loggerSource.Create();
                }

                return _currentLogWriter;
            }
        }

        public void WriteLog(string logLevel, string message, string detail = null, string methodName = null)
        {
            LogEntry logEntry = new LogEntry();
            //switch log type
            logEntry.Priority = 1;
            logEntry.Message = message;
            logEntry.Categories.Add("security");
            CurrentLogWriter.Write(logEntry);
        }

        public bool IsEnableFor(int logLevel)
        {
            return LogHelper.IsIncludeLogLevel(logLevel);
        }
    }
}
