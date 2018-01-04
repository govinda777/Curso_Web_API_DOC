using CursoWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CursoWebApi.Controllers
{
    public class CustomersController : ApiController
    {
        [Route("customers/{customerId}/orders")]
        public IEnumerable<OrderInfo> GetOrdersByCustomer(int customerId)
        {
            return new OrderInfo[] 
            {
                new OrderInfo() { Name = "Teste1", Date = DateTime.Now },
                new OrderInfo() { Name = "Teste2", Date = DateTime.Now.AddDays(1) }
            };
        }
    }
}