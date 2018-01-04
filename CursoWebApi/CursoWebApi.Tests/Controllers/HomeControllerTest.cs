using System.Web.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using CursoWebApi;
using CursoWebApi.Controllers;

namespace CursoWebApi.Tests.Controllers
{
    [TestClass]
    public class HomeControllerTest
    {
        [TestMethod]
        public void Index()
        {
            // Arrange
            HomeController controller = new HomeController();

            // Act
            var result = controller.Index() as ViewResult;

            // Assert
            Assert.IsNotNull(result);
        }
    }
}
