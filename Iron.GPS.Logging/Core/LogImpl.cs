using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Iron.GPS.Logging
{
    public class LogImpl:LoggerWrapperImpl,ILog
    {
        public LogImpl(ILogger logger):
            base(logger)
        {

        }

        public void Error(string message, string detail = null, string methodName = null)
        {
            if (IsErrorEnabled)
            {
                Logger.WriteLog(LoggerType.Error.ToString(), message, detail, methodName);
            }
        }

        /// <summary>
        /// Log a message with Error level
        /// </summary>
        /// <param name="exception">Error exception</param>
        /// <param name="methodName">MethodName for log</param>
        public void Error(Exception exception, string methodName = null)
        {
            if (IsErrorEnabled)
            {
                Logger.WriteLog(LoggerType.Error.ToString(), exception.Message, GetLogDetails(exception), methodName);
            }
        }

        /// <summary>
        /// Log a message with Debug level
        /// </summary>
        /// <param name="message">Message to log</param>
        /// <param name="detail">Detail to log</param>
        /// <param name="methodName">MethodName for log</param>
        public void Debug(string message, string detail = null, string methodName = null)
        {
            if (IsDebugEnabled)
            {
                Logger.WriteLog(LoggerType.Debug.ToString(), message, detail, methodName);
            }
        }

        /// <summary>
        /// Log a message with Debug level
        /// </summary>
        /// <param name="exception">Error exception</param>
        /// <param name="methodName">MethodName for log</param>
        public void Debug(Exception exception, string methodName = null)
        {
            if (IsDebugEnabled)
            {
                Logger.WriteLog(LoggerType.Debug.ToString(), exception.Message, GetLogDetails(exception), methodName);
            }
        }

        /// <summary>
        /// Log a message with Info level
        /// </summary>
        /// <param name="message">Message to log</param>
        /// <param name="detail">Detail to log</param>
        /// <param name="methodName">MethodName for log</param>
        public void Info(string message, string detail = null, string methodName = null)
        {
            if (IsInfoEnabled)
            {
                Logger.WriteLog(LoggerType.Info.ToString(), message, detail, methodName);
            }
        }

        /// <summary>
        /// Log a message with Info level
        /// </summary>
        /// <param name="exception">Error exception</param>
        /// <param name="methodName">MethodName for log</param>
        public void Info(Exception exception, string methodName = null)
        {
            if (IsInfoEnabled)
            {
                Logger.WriteLog(LoggerType.Info.ToString(), exception.Message, GetLogDetails(exception), methodName);
            }
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="ex"></param>
        /// <returns></returns>
        private string GetLogDetails(Exception ex)
        {
            StringBuilder sb = new StringBuilder();
            sb.Append(ex.Message);
            sb.AppendLine();
            sb.Append(ex.StackTrace);

            return sb.ToString();
        }


        /// <summary>
        /// Is debug enabled 
        /// </summary>
        public bool IsDebugEnabled
        {
            get
            {
                return Logger.IsEnableFor((int)LoggerType.Debug);
            }
        }

        /// <summary>
        /// Is error enabled
        /// </summary>
        public bool IsErrorEnabled
        {
            get
            {
                return Logger.IsEnableFor((int)LoggerType.Error);
            }
        }

        /// <summary>
        /// Is info level enabled
        /// </summary>
        public bool IsInfoEnabled
        {
            get
            {
                return Logger.IsEnableFor((int)LoggerType.Info);
            }
        }
    }
}
