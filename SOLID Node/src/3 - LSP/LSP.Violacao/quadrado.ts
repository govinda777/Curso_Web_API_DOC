import {Retangulo} from "./retangulo";

//Paralelo gramo, com dimenções iguais
class Quadrado extends Retangulo {

    constructor(altura: number, largura: number) {
        super(altura, largura);

        this.altura = largura;
        this.largura = altura;
    }
    
}
export {Quadrado}