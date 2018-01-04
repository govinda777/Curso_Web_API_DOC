using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CursoWebApi.Controllers
{
    public class ValuesController : ApiController
    {
        // GET api/values
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        public string Get(int id)
        {
            return id.ToString();
        }

        // POST api/values
        public string Post([FromBody]string value)
        {
            return value;
        }


        public string Post([FromBody]TesteModel model)
        {
            return model.GetType().Name;
        }

        // PUT api/values/5
        public string Put(int id, [FromBody]string value)
        {
            return value;
        }

        // DELETE api/values/5
        public string Delete(int id)
        {
            return id.ToString();
        }

       
    }

    public class TesteModel {

        public string Teste1 { get; set; }
        public string Teste2 { get; set; }

    }
}
