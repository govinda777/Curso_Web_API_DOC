import { DebitoConta } from "./debitoConta";

class DebitoContaInvestimento extends DebitoConta {

    // overriding super class method
    debitar(valor: Number, conta: string ): string{

        // Debita Conta Investimento
        return this.formatarTransacao();
    }

}
export {DebitoContaInvestimento}