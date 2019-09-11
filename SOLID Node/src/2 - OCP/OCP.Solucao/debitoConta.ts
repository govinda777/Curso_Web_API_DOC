abstract class DebitoConta {

    numeroTransacao: string;

    constructor(numeroTransacao: string) {
        this.numeroTransacao = numeroTransacao;
    }

    abstract debitar(valor: Number, conta: string ): string;

    public formatarTransacao() : string
    {
        this.numeroTransacao = Math.random().toString();

        // Numero de transacao formatado
        return this.numeroTransacao;
    } 
}
export {DebitoConta}