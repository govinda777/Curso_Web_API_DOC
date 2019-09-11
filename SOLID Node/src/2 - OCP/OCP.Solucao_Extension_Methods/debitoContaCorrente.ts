import { DebitoConta } from "./debitoConta";

declare module './debitoConta' {
    interface DebitoConta {
        debitarContaCorrente(this: DebitoConta): string;
    }
}

function debitarContaCorrente(this: DebitoConta) {
    // Logica de negócio para debito em conta corrente.
    return this.formatarTransacao();
}
  
DebitoConta.prototype.debitarContaCorrente = debitarContaCorrente;