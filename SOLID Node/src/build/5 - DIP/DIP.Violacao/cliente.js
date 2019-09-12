"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emailService_1 = require("./emailService");
var cpfService_1 = require("./cpfService");
var Cliente = /** @class */ (function () {
    function Cliente(clienteId, nome, email, cpf, dataCadastro) {
        this.clienteId = clienteId;
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.dataCadastro = dataCadastro;
    }
    Cliente.prototype.isValid = function () {
        var emailService = new emailService_1.EmailService();
        var cpfService = new cpfService_1.CpfService();
        return emailService.isValid(this.email) && cpfService.isValid(this.cpf);
    };
    return Cliente;
}());
exports.Cliente = Cliente;
