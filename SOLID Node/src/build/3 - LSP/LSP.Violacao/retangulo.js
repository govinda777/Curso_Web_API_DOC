"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Paralelo gramo
var Retangulo = /** @class */ (function () {
    function Retangulo(altura, largura) {
        this.altura = altura;
        this.largura = largura;
    }
    Retangulo.prototype.getAltura = function () {
        return this.altura;
    };
    Retangulo.prototype.getLargura = function () {
        return this.largura;
    };
    Retangulo.prototype.area = function () {
        return this.altura * this.largura;
    };
    return Retangulo;
}());
exports.Retangulo = Retangulo;
