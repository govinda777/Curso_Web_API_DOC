const { ConnectionPool } = require("mssql");
import {Cliente} from "./cliente";
import { IClienteRepository } from "./Interfaces/iclienteRepository";

class ClienteRepository implements IClienteRepository {

    sql: any;
    config: any;

    constructor() {

        this.sql = require("mssql");

        // config for your database
        this.config = {
            user: 'sa',
            password: 'mypassword',
            server: 'localhost',
            database: 'SchoolDB'
        };
    }

    public adicionarCliente(cliente: Cliente): void {
        
        const pool = new ConnectionPool(this.config).connect();

        const result = pool.request()
            .input("NOME", Number, cliente.nome)
            .input("EMAIL", String, cliente.email)
            .input("CPF", String, cliente.cpf)
            .input("DATACADASTRO", String, cliente.dataCadastro)
            .query("INSERT INTO CLIENTE (NOME, EMAIL, CPF, DATACADASTRO) VALUES (@nome, @email, @cpf, @dataCad))");

        pool.close();
    }
}
export {ClienteRepository}