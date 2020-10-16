"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Control = void 0;
var coordenada_1 = require("../modelo/coordenada");
var tablero_1 = require("../modelo/tablero");
var Control = /** @class */ (function () {
    function Control() {
        this._alto = 8;
        this._ancho = 12;
        this._tablero = new tablero_1.Tablero(this._ancho, this._alto);
    }
    Control.prototype.play = function () {
        alert("Bienvenidos al juego de los Barcos");
        do {
            alert(this._tablero.mostrarTablero());
            this._tablero.comprobarCasilla(this.pedirCoordenada());
        } while (!this._tablero.comprobarFlotaHundida());
    };
    Control.prototype.pedirCoordenada = function () {
        return new coordenada_1.Coordenada(this.solicitarPuntoCoordenada(this._tablero.alto, "Y"), this.solicitarPuntoCoordenada(this._tablero.ancho, "X"));
    };
    Control.prototype.solicitarPuntoCoordenada = function (limite, punto) {
        do {
            var coordenada = prompt("Dame un punto del eje " + punto);
            if (!coordenada.match("\\d+")) {
                coordenada = 0;
            }
            else {
                coordenada -= 1;
            }
        } while (!this.comprobarCoordenada(coordenada, limite));
        return coordenada;
    };
    Control.prototype.comprobarCoordenada = function (coordenada, max) {
        var min = 0;
        if (coordenada >= min && coordenada < max) {
            return true;
        }
        return false;
    };
    return Control;
}());
exports.Control = Control;
//# sourceMappingURL=control.js.map