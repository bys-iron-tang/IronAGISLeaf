﻿using Iron.GPS.DataModels;
using Iron.GPS.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Iron.GPS.Application.WebApiControllers
{

    public class MainController : ApiController
    {
        // GET api/main
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        [HttpGet]
        public List<string> InitializeApplication()
        {
            ApplicationDataService appDataService = new ApplicationDataService();
            List<ApplicationMenu> menus= appDataService.GetMenuItems();
            return new List<string> { "asd", "asdr" };
        }

        // GET api/main/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/main
        public void Post([FromBody]string value)
        {
        }

        // PUT api/main/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/main/5
        public void Delete(int id)
        {
        }
    }
}
