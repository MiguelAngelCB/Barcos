"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flota = void 0;
var estado_1 = require("./estado");
var generadorFlota_1 = require("./generadorFlota");
var Flota = /** @class */ (function () {
    function Flota(ancho, alto) {
        this._barcos = [];
        this._generadorFlota = new generadorFlota_1.GeneradorFlota(ancho, alto, this._barcos);
        this.crearFlota();
    }
    Flota.prototype.crearFlota = function () {
        var barcos = [2, 2, 2, 2, 3, 3, 3, 4, 4,];
        for (var i = 0; i < barcos.length; i++) {
            var barco = this._generadorFlota.crearBarco(barcos[i]);
            this._barcos[i] = barco;
        }
    };
    Flota.prototype.comprobarBarcosHundidos = function () {
        var posicionesTocadas = 0;
        var barcosHundidos = 0;
        for (var i = 0; i < this._barcos.length; i++) {
            posicionesTocadas = 0;
            for (var j = 0; j < this.barcoPosiciones(i).length; j++) {
                if (this._barcos[i].posiciones[j].estado == estado_1.Estado.tocado) {
                    posicionesTocadas++;
                }
                if (posicionesTocadas == this.barcoPosiciones(i).length) {
                    this.hundirBarco(this.barcos[i]);
                    barcosHundidos++;
                }
            }
        }
        return barcosHundidos;
    };
    Flota.prototype.barcoPosiciones = function (index) {
        return this._barcos[index].posiciones;
    };
    Flota.prototype.hundirBarco = function (barco) {
        for (var i = 0; i < barco.posiciones.length; i++) {
            barco.posiciones[i].estado = estado_1.Estado.hundido;
        }
        alert("Hundido");
    };
    Object.defineProperty(Flota.prototype, "barcos", {
        get: function () {
            return this._barcos;
        },
        enumerable: false,
        configurable: true
    });
    return Flota;
}());
exports.Flota = Flota;
//# sourceMappingURL=flota.js.map