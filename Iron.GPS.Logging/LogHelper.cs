using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Iron.GPS.Logging
{
    public class LogHelper
    {
        private static int MAX_LOG_LEVEL = 7;
        public static bool IsIncludeLogLevel(int logLevel)
        {
            string configLogLevel = ConfigurationManager.AppSettings["AGLogLevel"];
            int currentConfigLevel = ConvertIntByStr(configLogLevel);
            return IsIncluded(currentConfigLevel,logLevel);
        }

        private static bool IsIncluded(int currentConfigLevel, int logLevel)
        {
            bool isInclude = false;
            if (currentConfigLevel > 0 && currentConfigLevel <= MAX_LOG_LEVEL && logLevel > 0)
            {
                isInclude = (currentConfigLevel & logLevel) == 0 ? false : true;
            }

            return isInclude;
        }

        private static int ConvertIntByStr(string configLogLevel)
        {
            int rel = 0;
            if (int.TryParse(configLogLevel, out rel))
                return rel;

            return rel;
        }
    }
}
