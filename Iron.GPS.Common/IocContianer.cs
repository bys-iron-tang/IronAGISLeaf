using Microsoft.Practices.Unity;
using Microsoft.Practices.Unity.Configuration;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Iron.GPS.Common
{
    public sealed class IocContianer
    {
        private static IUnityContainer _container;

        private static object[] _obj = new object[] { };

        public static IUnityContainer InnerContainer
        {
            get
            {
                lock (_obj)
                {
                    if (null == _container)
                    {
                        StartUp();
                    }
                }

                return _container;
            }
        }

        private static void StartUp()
        {
            _container = new UnityContainer();
            _container.LoadConfiguration();

            ////or
            //UnityConfigurationSection configure = ConfigurationManager.GetSection(UnityConfigurationSection.SectionName) as UnityConfigurationSection;
            //if (configure != null)
            //{
            //    configure.Configure(_container);
            //}
        }
    }
}
