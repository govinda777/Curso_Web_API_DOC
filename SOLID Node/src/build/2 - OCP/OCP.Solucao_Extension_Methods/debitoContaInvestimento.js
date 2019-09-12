"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var debitoConta_1 = require("./debitoConta");
function debitarContaInvestimento() {
    // Logica de negócio para debito em conta corrente.
    return this.formatarTransacao();
}
debitoConta_1.DebitoConta.prototype.debitarContaInvestimento = debitarContaInvestimento;
