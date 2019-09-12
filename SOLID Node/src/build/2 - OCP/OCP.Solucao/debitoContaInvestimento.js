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
var debitoConta_1 = require("./debitoConta");
var DebitoContaInvestimento = /** @class */ (function (_super) {
    __extends(DebitoContaInvestimento, _super);
    function DebitoContaInvestimento() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // overriding super class method
    DebitoContaInvestimento.prototype.debitar = function (valor, conta) {
        // Debita Conta Investimento
        return this.formatarTransacao();
    };
    return DebitoContaInvestimento;
}(debitoConta_1.DebitoConta));
exports.DebitoContaInvestimento = DebitoContaInvestimento;
