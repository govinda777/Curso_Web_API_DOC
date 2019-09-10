"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConnectionPool = require("mssql").ConnectionPool;
var nodemailer = require('nodemailer').nodemailer;
var Cliente = /** @class */ (function () {
    function Cliente(clienteId, nome, email, cpf, dataCadastro) {
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
    Cliente.prototype.adicionarCliente = function () {
        if (!this.email.includes("@"))
            return "Cliente com e-mail inválido";
        if (this.cpf.length != 11)
            return "Cliente com CPF inválido";
        var pool = new ConnectionPool(this.config).connect();
        var result = pool.request()
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
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            }
            else {
                console.log('Email sent: ' + info.response);
            }
        });
        return "Cliente cadastrado com sucesso!";
    };
    return Cliente;
}());
exports.Cliente = Cliente;
