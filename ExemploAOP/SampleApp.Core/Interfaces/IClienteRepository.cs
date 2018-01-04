namespace SampleApp.Core.Interfaces
{
    public interface IClienteRepository
    {
        void AtualizarIdade(int idCliente, int idade);
        void Validar(int idCliente);
    }
}
