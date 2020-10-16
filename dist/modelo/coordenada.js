"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coordenada = void 0;
var sentido_1 = require("./sentido");
var Coordenada = /** @class */ (function () {
    //La forma ts para declarar propiedades obligatorias
    function Coordenada(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Object.defineProperty(Coordenada.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (xs) {
            this._x = xs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coordenada.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (ys) {
            this._y = ys;
        },
        enumerable: false,
        configurable: true
    });
    //Hay cosas java que siempre vienen bien
    Coordenada.prototype.equals = function (coordena) {
        return this.x == coordena.x && this.y == coordena.y;
    };
    Coordenada.prototype.mover = function (direccion) {
        if (direccion == sentido_1.Sentido.abajo) {
            this.bajar();
        }
        else {
            this.avanzar();
        }
    };
    Coordenada.prototype.bajar = function () {
        this.y++;
    };
    Coordenada.prototype.avanzar = function () {
        this.x++;
    };
    return Coordenada;
}());
exports.Coordenada = Coordenada;
//# sourceMappingURL=coordenada.js.map