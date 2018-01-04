using SampleApp.Core.Interfaces;
using System;
using System.Threading;

namespace SampleApp.Core.Types
{
    public class ClienteRepository: IClienteRepository
    {
        public void AtualizarIdade(int idCliente, int idade)
        {
            Console.WriteLine("Executando o metodo AtualizarIdade");
        }

        public void Validar(int idCliente)
        {
            Console.WriteLine("Executando o metodo Validar");
        }
    }
}
