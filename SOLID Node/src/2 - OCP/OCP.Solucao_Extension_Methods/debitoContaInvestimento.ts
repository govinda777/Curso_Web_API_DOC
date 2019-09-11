import { DebitoConta } from "./debitoConta";

declare module './debitoConta' {
    interface DebitoConta {
        debitarContaInvestimento(this: DebitoConta): string;
    }
}

function debitarContaInvestimento(this: DebitoConta) {
    // Logica de negócio para debito em conta corrente.
    return this.formatarTransacao();
}
  
DebitoConta.prototype.debitarContaInvestimento = debitarContaInvestimento;