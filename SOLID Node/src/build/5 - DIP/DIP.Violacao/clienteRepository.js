"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConnectionPool = require("mssql").ConnectionPool;
var ClienteRepository = /** @class */ (function () {
    function ClienteRepository() {
        this.sql = require("mssql");
        // config for your database
        this.config = {
            user: 'sa',
            password: 'mypassword',
            server: 'localhost',
            database: 'SchoolDB'
        };
    }
    ClienteRepository.prototype.adicionarCliente = function (cliente) {
        var pool = new ConnectionPool(this.config).connect();
        var result = pool.request()
            .input("NOME", Number, cliente.nome)
            .input("EMAIL", String, cliente.email)
            .input("CPF", String, cliente.cpf)
            .input("DATACADASTRO", String, cliente.dataCadastro)
            .query("INSERT INTO CLIENTE (NOME, EMAIL, CPF, DATACADASTRO) VALUES (@nome, @email, @cpf, @dataCad))");
        pool.close();
    };
    return ClienteRepository;
}());
exports.ClienteRepository = ClienteRepository;
