
abstract class Paralelogramo
{
    protected altura: number;
    protected largura: number;

    constructor(altura: number, largura: number)
    {
        this.altura = altura;
        this.largura = largura;
    }

    protected area() : number {
        return this.altura * this.largura;
    } 
}
export {Paralelogramo}
