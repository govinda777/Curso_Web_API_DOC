import {Cliente} from "./cliente";
import {ClienteRepository} from "./clienteRepository";
import { EmailService } from "./emailService";

class ClienteService {
    
    public AdicionarCliente(cliente: Cliente): string
        {
            if (!cliente.isValid())
                return "Dados inválidos";

            var repo = new ClienteRepository();
            repo.adicionarCliente(cliente);

            var emailService = new EmailService();
            emailService.enviar("empresa@empresa.com", cliente.email, 
            "Bem Vindo", "Parabéns está Cadastrado");

            return "Cliente cadastrado com sucesso";
        }
}