"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var paralelogramo_1 = require("./paralelogramo");
//Paralelo gramo, com dimenções iguais
var Quadrado = /** @class */ (function (_super) {
    __extends(Quadrado, _super);
    function Quadrado(altura, largura) {
        var _this = _super.call(this, altura, largura) || this;
        if (_this.altura != _this.largura) {
            throw new Error("Os dois lados do quadrado precisam ser iguais");
        }
        return _this;
    }
    return Quadrado;
}(paralelogramo_1.Paralelogramo));
exports.Quadrado = Quadrado;
