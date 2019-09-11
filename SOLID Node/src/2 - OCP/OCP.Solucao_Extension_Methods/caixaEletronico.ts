import { DebitoConta } from "./debitoConta";
import { } from "./debitoContaCorrente";
import { } from "./debitoContaInvestimento";
import { } from "./debitoContaPoupanca";

class CaixaEletronico {

    public operacoes() {

        this.menuOperacoes();

        var opcao = this.consoleRead();

        var debitoConta = this.getDebitoConta();

        var retorno: string = "";

            switch (opcao)
            {
                case '1':
                    console.log("Efetuando operação em Conta Corrente");
                    retorno = debitoConta.debitarContaCorrente();
                    break;
                case '2':
                    console.log("Efetuando operação em Conta Poupança");
                    retorno = debitoConta.debitarContaPoupanca();
                    break;
                case '3':
                    console.log("Efetuando operação em Conta Investimento");
                    retorno = debitoConta.debitarContaInvestimento();
                    break;
            }

            this.retornoTransacao(retorno);
    }

    public getDebitoConta(): DebitoConta {
        console.log();
        console.log("..............................");
        console.log();
        console.log("Digite a Conta");
        var conta = this.consoleRead();
        console.log("Digite o Valor");
        var valor = this.consoleRead();

        return new DebitoConta("","", 0);
    }

    public retornoTransacao(retorno: string)
    {
        console.log();
        console.log("Sucesso! Transação: " + retorno);
        this.consoleRead();
    }

    public consoleRead() : string {
        
        var stdin = process.openStdin();
        var result : string = ""; 

        stdin.addListener("data", function(d) {
            result = d;
        });

        return result;
    }

    public menuOperacoes() {
        console.log("Caixa Eletrônico SOLID");
        console.log("Escolha sua opção:");
        console.log();
        console.log("1 - Saque Conta Corrente");
        console.log("2 - Saque Conta Poupança");
        console.log("3 - Saque Conta Investimento");
    }
}
export {CaixaEletronico}