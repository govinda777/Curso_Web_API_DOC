import { EmailService } from './emailService';
import { CpfService } from './cpfService';
import { IEmailService } from './Interfaces/iemailService';
import { ICpfService } from './Interfaces/icpfService';

class Cliente {

    private emailService: IEmailService;
    private cpfService: ICpfService;

    readonly clienteId: number;
    readonly nome: string;
    readonly email: string;
    readonly cpf: string;
    readonly dataCadastro: string;

    constructor(
        emailService: IEmailService,
        cpfService: ICpfService,
        clienteId: number,
        nome: string,
        email: string,
        cpf: string,
        dataCadastro: string) {

        this.emailService = emailService;
        this.cpfService = cpfService;

        this.clienteId = clienteId;
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.dataCadastro = dataCadastro;
    }

    public isValid() : boolean
    {
        return this.emailService.isValid(this.email) && this.cpfService.isValid(this.cpf);
    }
}
export {Cliente}