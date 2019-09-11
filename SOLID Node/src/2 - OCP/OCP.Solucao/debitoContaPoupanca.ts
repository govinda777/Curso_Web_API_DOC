import { DebitoConta } from "./debitoConta";

class DebitoContaPoupanca extends DebitoConta {

    // overriding super class method
    debitar(valor: Number, conta: string ): string{

        // Debita Conta Poupanca
        return this.formatarTransacao();
    }

}
export {DebitoContaPoupanca}