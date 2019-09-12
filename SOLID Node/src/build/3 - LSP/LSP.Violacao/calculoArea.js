"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var quadrado_1 = require("./quadrado");
var CalculoArea = /** @class */ (function () {
    function CalculoArea() {
    }
    CalculoArea.prototype.obterAreaRetangulo = function (ret) {
        console.log("Calculo da área do Retangulo");
        console.log();
        console.log(ret.getAltura() + " * " + ret.getLargura());
        console.log();
        console.log(ret.area());
    };
    CalculoArea.prototype.Calcular = function () {
        var quad = new quadrado_1.Quadrado(10, 5);
        this.obterAreaRetangulo(quad);
    };
    return CalculoArea;
}());
exports.CalculoArea = CalculoArea;
