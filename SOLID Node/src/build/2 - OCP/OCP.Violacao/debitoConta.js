"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tipoConta_1 = require("./tipoConta");
var DebitoConta = /** @class */ (function () {
    function DebitoConta() {
    }
    DebitoConta.prototype.debitar = function (valor, conta, tipoConta) {
        if (tipoConta == tipoConta_1.TipoConta.Corrente) {
            // Debita Conta Corrente
        }
        if (tipoConta == tipoConta_1.TipoConta.Poupanca) {
            // Valida Aniversário da Conta
            // Debita Conta Poupança
        }
    };
    return DebitoConta;
}());
exports.DebitoConta = DebitoConta;
