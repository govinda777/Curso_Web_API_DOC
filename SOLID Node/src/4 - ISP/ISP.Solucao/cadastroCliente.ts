import {ICadastroCliente} from "./Interfaces/icadastroCliente"

class CadastroCliente implements ICadastroCliente {

    public validarDados()
    {
        // Validar CPF, Email
    }

    public salvarBanco()
    {
        // Insert tabela Cliente
    }

    public enviarEmail()
    {
        // Enviar e-mail para o cliente
    }
}
export {CadastroCliente}