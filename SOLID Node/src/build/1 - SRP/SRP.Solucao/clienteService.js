"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clienteRepository_1 = require("./clienteRepository");
var emailService_1 = require("./emailService");
var ClienteService = /** @class */ (function () {
    function ClienteService() {
    }
    ClienteService.prototype.AdicionarCliente = function (cliente) {
        if (!cliente.isValid())
            return "Dados inválidos";
        var repo = new clienteRepository_1.ClienteRepository();
        repo.adicionarCliente(cliente);
        var emailService = new emailService_1.EmailService();
        emailService.enviar("empresa@empresa.com", cliente.email, "Bem Vindo", "Parabéns está Cadastrado");
        return "Cliente cadastrado com sucesso";
    };
    return ClienteService;
}());
