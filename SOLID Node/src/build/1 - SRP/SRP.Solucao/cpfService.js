"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CpfService = /** @class */ (function () {
    function CpfService() {
    }
    CpfService.prototype.isValid = function (cpf) {
        return cpf.length != 11 ? false : true;
    };
    return CpfService;
}());
exports.CpfService = CpfService;
