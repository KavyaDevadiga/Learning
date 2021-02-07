"use strict";
exports.__esModule = true;
exports.example = void 0;
var example = /** @class */ (function () {
    function example(s) {
        var _this = this;
        this.s = s;
        this.print = function () { return console.log("value of s is " + _this.s); };
    }
    Object.defineProperty(example.prototype, "S", {
        get: function () {
            return this.s;
        },
        set: function (value) {
            this.s = value;
        },
        enumerable: false,
        configurable: true
    });
    return example;
}());
exports.example = example;
