import {Retangulo} from "./retangulo";
import {Quadrado} from "./quadrado";

class CalculoArea {

    public obterAreaRetangulo(ret: Retangulo)
        {
            console.log("Calculo da área do Retangulo");
            console.log();
            console.log(ret.getAltura() + " * " + ret.getLargura());
            console.log();
            console.log(ret.area());
        }

        public Calcular()
        {
            var quad = new Quadrado(10, 5)
           
            this.obterAreaRetangulo(quad);
        }
}
export {CalculoArea}