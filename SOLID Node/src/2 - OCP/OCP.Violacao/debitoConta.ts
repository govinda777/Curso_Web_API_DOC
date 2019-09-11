import {TipoConta} from "./tipoConta";

class DebitoConta {

    public debitar(valor: Number , conta: string , tipoConta: TipoConta ) {

        if (tipoConta == TipoConta.Corrente)
        {
            // Debita Conta Corrente
        }

        if (tipoConta == TipoConta.Poupanca)
        {
            // Valida Aniversário da Conta
            // Debita Conta Poupança
        }
    }
}
export {DebitoConta}