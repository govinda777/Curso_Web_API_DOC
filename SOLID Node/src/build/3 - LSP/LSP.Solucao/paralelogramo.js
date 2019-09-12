"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Paralelogramo = /** @class */ (function () {
    function Paralelogramo(altura, largura) {
        this.altura = altura;
        this.largura = largura;
    }
    Paralelogramo.prototype.area = function () {
        return this.altura * this.largura;
    };
    return Paralelogramo;
}());
exports.Paralelogramo = Paralelogramo;
