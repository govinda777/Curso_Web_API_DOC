import { DebitoConta } from "./debitoConta";

declare module './debitoConta' {
    interface DebitoConta {
        debitarContaPoupanca(this: DebitoConta): string;
    }
}

function debitarContaPoupanca(this: DebitoConta) {
    // Logica de negócio para debito em conta corrente.
    return this.formatarTransacao();
}
  
DebitoConta.prototype.debitarContaPoupanca = debitarContaPoupanca;