import {Retangulo} from "./retangulo";

class Quadrado extends Retangulo {

    constructor(altura: number, largura: number) {
        super(altura, largura);

        this.altura = largura;
        this.largura = altura;
    }
    
}
export {Quadrado}