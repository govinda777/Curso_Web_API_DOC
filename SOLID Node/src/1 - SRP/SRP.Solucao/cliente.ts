import { EmailService } from './emailService';
import { CpfService } from './cpfService';

class Cliente {

    readonly clienteId: number;
    readonly nome: string;
    readonly email: string;
    readonly cpf: string;
    readonly dataCadastro: string;

    constructor(clienteId: number,
        nome: string,
        email: string,
        cpf: string,
        dataCadastro: string) {
        this.clienteId = clienteId;
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.dataCadastro = dataCadastro;
    }

    public isValid() : boolean
    {
        const emailService = new EmailService();
        const cpfService = new CpfService();

        return emailService.isValid(this.email) && cpfService.isValid(this.cpf);
    }
}
export {Cliente}