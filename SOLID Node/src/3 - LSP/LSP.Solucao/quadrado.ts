import { Paralelogramo } from "./paralelogramo";

//Paralelo gramo, com dimenções iguais
class Quadrado extends Paralelogramo {

    constructor(altura: number, largura: number) {
        super(altura, largura);

        if(this.altura != this.largura) {
            throw new Error("Os dois lados do quadrado precisam ser iguais");
        }
    }
    
}
export {Quadrado}