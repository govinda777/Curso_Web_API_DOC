
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CursoWebApi.Antifraude;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System;

namespace CursoWebApi.Controllers
{
    [TestClass]
    public class AntifraudeControllerTest 
    {
        [TestMethod]
        public void Post()
        {
            // Arrange
            var mock = new Mock<IAntifraude>();
            mock.Setup(x => x.ValidarTransacao(It.IsAny<string>(), It.IsAny<double>()));
            var controller = new AntifraudeController(mock.Object);
            var numeroCartao = "65165165165";
            var valorTransacao = 10;

            // Act
            var result = controller.Post(numeroCartao, valorTransacao);

            // Assert
            Assert.IsNotNull(result);
        }

        [DataTestMethod]
        [DataRow("465465", 3)]
        [DataRow("45-64564", 26)]
        [DataRow("4564654", 43)]
        public void PostAnyParameters(string numeroCartao, double valorTransacao)
        {
            // Arrange
            var mock = new Mock<IAntifraude>();
            mock.Setup(x => x.ValidarTransacao(It.IsAny<string>(), It.IsAny<double>()));
            var controller = new AntifraudeController(mock.Object);
            
            // Act
            var result = controller.Post(numeroCartao, valorTransacao);

            // Assert
            Assert.IsNotNull(result);
        }

        [TestMethod]
        [ExpectedException(typeof(ArgumentException))]
        public void PostArgumentException()
        {
            // Arrange
            var mock = new Mock<IAntifraude>();
            mock.Setup(x => x.ValidarTransacao(It.IsAny<string>(), It.IsAny<double>()));
            var controller = new AntifraudeController(mock.Object);
            var numeroCartao = "65165--165165";
            var valorTransacao = 10;

            // Act
            var result = controller.Post(numeroCartao, valorTransacao);

            // Assert
        }

        [TestMethod]
        public void Get()
        {
            // Arrange


            // Act
            

            // Assert
            
        }

        [TestMethod]
        public void Put()
        {
            // Arrange


            // Act
            
            // Assert
            
        }

        [TestMethod]
        public void Delete()
        {
            // Arrange


            // Act
            
            // Assert
            
        }

    }
}