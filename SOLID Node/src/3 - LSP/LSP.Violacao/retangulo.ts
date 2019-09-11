
//Paralelo gramo
class Retangulo {

    protected altura: number;
    protected largura: number;

    public getAltura() {
        return this.altura;
    }

    public getLargura() {
        return this.largura;
    }

    constructor(altura: number, largura: number) {
        this.altura = altura;
        this.largura = largura;
    }

    public area() : number {
        return this.altura * this.largura;
    }
}
export {Retangulo}