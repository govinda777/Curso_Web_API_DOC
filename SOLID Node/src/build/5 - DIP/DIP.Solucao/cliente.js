"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cliente = /** @class */ (function () {
    function Cliente(emailService, cpfService, clienteId, nome, email, cpf, dataCadastro) {
        this.emailService = emailService;
        this.cpfService = cpfService;
        this.clienteId = clienteId;
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.dataCadastro = dataCadastro;
    }
    Cliente.prototype.isValid = function () {
        return this.emailService.isValid(this.email) && this.cpfService.isValid(this.cpf);
    };
    return Cliente;
}());
exports.Cliente = Cliente;
