"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var debitoConta_1 = require("./debitoConta");
var CaixaEletronico = /** @class */ (function () {
    function CaixaEletronico() {
    }
    CaixaEletronico.prototype.operacoes = function () {
        this.menuOperacoes();
        var opcao = this.consoleRead();
        var debitoConta = this.getDebitoConta();
        var retorno = "";
        switch (opcao) {
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
    };
    CaixaEletronico.prototype.getDebitoConta = function () {
        console.log();
        console.log("..............................");
        console.log();
        console.log("Digite a Conta");
        var conta = this.consoleRead();
        console.log("Digite o Valor");
        var valor = this.consoleRead();
        return new debitoConta_1.DebitoConta("", "", 0);
    };
    CaixaEletronico.prototype.retornoTransacao = function (retorno) {
        console.log();
        console.log("Sucesso! Transação: " + retorno);
        this.consoleRead();
    };
    CaixaEletronico.prototype.consoleRead = function () {
        var stdin = process.openStdin();
        var result = "";
        stdin.addListener("data", function (d) {
            result = d;
        });
        return result;
    };
    CaixaEletronico.prototype.menuOperacoes = function () {
        console.log("Caixa Eletrônico SOLID");
        console.log("Escolha sua opção:");
        console.log();
        console.log("1 - Saque Conta Corrente");
        console.log("2 - Saque Conta Poupança");
        console.log("3 - Saque Conta Investimento");
    };
    return CaixaEletronico;
}());
exports.CaixaEletronico = CaixaEletronico;
