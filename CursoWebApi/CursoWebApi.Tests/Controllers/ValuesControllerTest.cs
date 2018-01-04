using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using CursoWebApi;
using CursoWebApi.Controllers;

namespace CursoWebApi.Tests.Controllers
{
    [TestClass]
    public class ValuesControllerTest
    {
        [TestMethod]
        public void Get()
        {
            // Arrange
            ValuesController controller = new ValuesController();

            // Act
            IEnumerable<string> result = controller.Get();

            // Assert
            Assert.IsNotNull(result);
            Assert.AreEqual(2, result.Count());
            Assert.AreEqual("value1", result.ElementAt(0));
            Assert.AreEqual("value2", result.ElementAt(1));
        }

        [TestMethod]
        public void GetById()
        {
            // Arrange
            ValuesController controller = new ValuesController();
            int id = 5;
            // Act
            string result = controller.Get(id);

            // Assert
            Assert.AreEqual(id.ToString(), result);
        }

        [TestMethod]
        public void Post()
        {
            // Arrange
            ValuesController controller = new ValuesController();
            string value = "value";
            // Act
            var result = controller.Post(value);

            // Assert
            Assert.IsTrue(result == value);
        }

        [TestMethod]
        public void Put()
        {
            // Arrange
            ValuesController controller = new ValuesController();
            int id = 5;
            string value = "value";

            // Act
            var result = controller.Put(id, value);

            // Assert
            Assert.IsTrue(result == value);
        }

        [TestMethod]
        public void Delete()
        {
            // Arrange
            ValuesController controller = new ValuesController();
            int id = 5;
            // Act
            var result = controller.Delete(id);

            // Assert
            Assert.IsTrue(result == id.ToString());
        }
    }
}
