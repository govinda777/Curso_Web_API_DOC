using SampleApp.Core.IoC;
using SampleApp.Core.Interfaces;
using System;

namespace SampleApp.Console
{
    internal class Program
    {
        public  static void Main(string[] args)
        {
            //Initialize the dependency resolver
            DependencyResolver.Initialize();

            //resolve the type:ClienteRepository
            var clienteRepository = DependencyResolver.For<IClienteRepository>();

            //method call
            try
            {
                clienteRepository.Validar(12);

                clienteRepository.AtualizarIdade(12, 777);
            }
            catch (Exception ex)
            {

            }

            System.Console.ReadKey();
           
        }
    }
}
