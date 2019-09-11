class DebitoConta {

    numeroConta: string;
    numeroTransacao: string;
    valor: Number

    constructor(numeroConta: string, numeroTransacao: string, valor: Number) {
        this.numeroConta = numeroConta;
        this.numeroTransacao = numeroTransacao;
        this.valor = valor;
    }

    public formatarTransacao() : string
    {
        this.numeroTransacao = Math.random().toString();

        // Numero de transacao formatado
        return this.numeroTransacao;
    } 
}
export {DebitoConta}