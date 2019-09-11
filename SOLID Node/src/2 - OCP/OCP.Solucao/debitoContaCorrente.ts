import { DebitoConta } from "./debitoConta";

class DebitoContaCorrente extends DebitoConta {

    // overriding super class method
    debitar(valor: Number, conta: string ): string{

        // Debita Conta Corrente
        return this.formatarTransacao();
    }

}