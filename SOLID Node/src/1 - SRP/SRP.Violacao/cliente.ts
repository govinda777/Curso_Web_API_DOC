const { ConnectionPool } = require("mssql");
const { nodemailer } = require('nodemailer');

class Cliente {

    readonly clienteId: number;
    readonly nome: string;
    readonly email: string;
    readonly cpf: string;
    readonly dataCadastro: string;

    sql: any;
    config: any;

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

        this.sql = require("mssql");

        // config for your database
        this.config = {
            user: 'sa',
            password: 'mypassword',
            server: 'localhost',
            database: 'SchoolDB'
        };
    }


    public adicionarCliente(): string {
        if (!this.email.includes("@"))
            return "Cliente com e-mail inválido";

        if (this.cpf.length != 11)
            return "Cliente com CPF inválido";

        const pool = new ConnectionPool(this.config).connect();

        const result = pool.request()
            .input("NOME", Number, this.nome)
            .input("EMAIL", String, this.email)
            .input("CPF", String, this.cpf)
            .input("DATACADASTRO", String, this.dataCadastro)
            .query("INSERT INTO CLIENTE (NOME, EMAIL, CPF, DATACADASTRO) VALUES (@nome, @email, @cpf, @dataCad))");

        pool.close();

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'youremail@gmail.com',
                pass: 'yourpassword'
            }
        });

        var mailOptions = {
            from: 'youremail@gmail.com',
            to: 'myfriend@yahoo.com',
            subject: 'Bem Vindo.',
            text: 'Parabéns! Você está cadastrado.'
        };

        transporter.sendMail(mailOptions, function (error: any, info: any) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

        return "Cliente cadastrado com sucesso!";
    }
}
export { Cliente }