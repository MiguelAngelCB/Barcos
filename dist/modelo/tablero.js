"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tablero = void 0;
var estado_1 = require("./estado");
var flota_1 = require("./flota");
var Tablero = /** @class */ (function () {
    function Tablero(ancho, alto) {
        this._casillas = new Array();
        this._ancho = ancho;
        this._alto = alto;
        this._flota = new flota_1.Flota(ancho, alto);
        this.createTablero(this._ancho, this._alto);
        this.colocarFlota();
    }
    Tablero.prototype.createTablero = function (_ancho, _alto) {
        for (var i = 0; i < _alto; i++) {
            this._casillas[i] = new Array(this._ancho);
        }
    };
    Tablero.prototype.colocarFlota = function () {
        for (var i = 0; i < this._flota.barcos.length; i++) {
            for (var j = 0; j < this._flota.barcos[i].posiciones.length; j++) {
                this.addBarco(this._flota.barcos[i].posiciones[j].coordenada, this._flota.barcos[i].posiciones[j]);
            }
        }
    };
    Tablero.prototype.addBarco = function (coordenada, barco) {
        this._casillas[coordenada.x][coordenada.y] = barco;
    };
    Tablero.prototype.comprobarFlotaHundida = function () {
        return this._flota.comprobarBarcosHundidos() == this._flota.barcos.length;
    };
    Tablero.prototype.mostrarTablero = function () {
        var tablero = "";
        tablero += "    ";
        for (var i = 0; i < this._ancho; i++) {
            tablero += (i + 1) + "  |  ";
        }
        tablero += "\n";
        tablero += "    _________________________________________________________";
        tablero += "\n";
        for (var i = 0; i < this._alto; i++) {
            tablero += (i + 1) + "  |   ";
            for (var j = 0; j < this._ancho; j++) {
                if (this._casillas[i][j] != undefined) {
                    tablero += this.mostrarCasilla(this._casillas[i][j]);
                }
                else {
                    tablero += "X  |  ";
                }
            }
            tablero += "____________________________________________________________";
            tablero += "\n";
        }
        return tablero;
    };
    Tablero.prototype.mostrarCasilla = function (casilla) {
        if (casilla == "A") {
            return "A  |  ";
        }
        if (casilla.estado == estado_1.Estado.indemne) {
            return "X  |  ";
        }
        else if (casilla.estado == estado_1.Estado.tocado) {
            return "T  |  ";
        }
        else {
            return "H  |  ";
        }
    };
    Tablero.prototype.comprobarCasilla = function (coordenada) {
        if (this._casillas[coordenada.x][coordenada.y] == undefined) {
            this._casillas[coordenada.x][coordenada.y] = "A";
            alert("Agua");
        }
        else if (this._casillas[coordenada.x][coordenada.y].estado == estado_1.Estado.indemne) {
            this._casillas[coordenada.x][coordenada.y].estado = estado_1.Estado.tocado;
            alert("Tocado");
        }
    };
    Object.defineProperty(Tablero.prototype, "casillas", {
        get: function () {
            return this._casillas;
        },
        enumerable: false,
        configurable: true
    });
    Tablero.prototype.getCasilla = function (coordenada) {
        return this._casillas[coordenada.x][coordenada.y];
    };
    Object.defineProperty(Tablero.prototype, "alto", {
        get: function () {
            return this._alto;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablero.prototype, "ancho", {
        get: function () {
            return this._ancho;
        },
        enumerable: false,
        configurable: true
    });
    return Tablero;
}());
exports.Tablero = Tablero;
//# sourceMappingURL=tablero.js.map