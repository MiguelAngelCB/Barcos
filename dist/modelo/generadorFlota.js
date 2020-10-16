"use strict";
// Generar una serie de barcos que no se solapan
// y que sortean la posicion inicial de cada barco
//y el sentido en que crecen
// Ademas el array de barcos creado asegura que ninguno se ha 
// solapado.
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneradorFlota = void 0;
var barco_1 = require("./barco");
var sentido_1 = require("./sentido");
var coordenada_1 = require("./coordenada");
var GeneradorFlota = /** @class */ (function () {
    function GeneradorFlota(ancho, alto, flota) {
        this.ancho = ancho;
        this.alto = alto;
        this._flota = flota;
    }
    GeneradorFlota.prototype.crearBarco = function (tamanoBarco) {
        do {
            var sentido = this.obtenerSentidoAleatorio();
            var coordenada = this.coordenadaVacia(tamanoBarco, sentido);
            var barco = new barco_1.Barco(tamanoBarco, coordenada, sentido);
        } while (this.comprobarSolapamiento(barco));
        return barco;
    };
    GeneradorFlota.prototype.comprobarSolapamiento = function (barco) {
        for (var i = 0; i < this._flota.length; i++) {
            if (barco.compruebaSolapamiento(this._flota[i].posiciones)) {
                return true;
            }
        }
        return false;
    };
    GeneradorFlota.prototype.coordenadaVacia = function (tamanoBarco, sentidoBarco) {
        do {
            var puntoX = this.getRandom(0, this.alto);
            var puntoY = this.getRandom(0, this.ancho);
            var coordenada = new coordenada_1.Coordenada(puntoX, puntoY);
        } while (this.salidaLimites(coordenada, tamanoBarco, sentidoBarco));
        return coordenada;
    };
    GeneradorFlota.prototype.salidaLimites = function (coordenadaBarco, tamanoBarco, sentido) {
        var posicionBarco;
        var fueraLimites = false;
        if (sentido == sentido_1.Sentido.derecha) {
            posicionBarco = tamanoBarco + coordenadaBarco.x;
            if (posicionBarco > this.alto) {
                fueraLimites = true;
            }
        }
        else {
            posicionBarco = tamanoBarco + coordenadaBarco.y;
            if (posicionBarco > this.ancho) {
                fueraLimites = true;
            }
        }
        return fueraLimites;
    };
    GeneradorFlota.prototype.obtenerSentidoAleatorio = function () {
        var sentido;
        sentido = sentido_1.Sentido.abajo;
        if (this.getRandom(0, 1) == 1) {
            sentido = sentido_1.Sentido.derecha;
        }
        return sentido;
    };
    GeneradorFlota.prototype.getRandom = function (min, max) {
        return Math.floor(Math.random() * (min - max) + max);
    };
    return GeneradorFlota;
}());
exports.GeneradorFlota = GeneradorFlota;
//# sourceMappingURL=generadorFlota.js.map