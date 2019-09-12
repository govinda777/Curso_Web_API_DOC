"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DebitoConta = /** @class */ (function () {
    function DebitoConta(numeroTransacao) {
        this.numeroTransacao = numeroTransacao;
    }
    DebitoConta.prototype.formatarTransacao = function () {
        this.numeroTransacao = Math.random().toString();
        // Numero de transacao formatado
        return this.numeroTransacao;
    };
    return DebitoConta;
}());
exports.DebitoConta = DebitoConta;
