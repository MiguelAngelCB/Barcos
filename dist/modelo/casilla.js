"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Casilla = void 0;
var Casilla = /** @class */ (function () {
    function Casilla(_coordenada, _estado) {
        this._coordenada = _coordenada;
        this._estado = _estado;
    }
    Object.defineProperty(Casilla.prototype, "coordenada", {
        /**
         * Getter coordenada
         * @return {Coordenada}
         */
        get: function () {
            return this._coordenada;
        },
        /**
         * Setter coordenada
         * @param {Coordenada} value
         */
        set: function (value) {
            this._coordenada = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Casilla.prototype, "estado", {
        /**
         * Getter estado
         * @return {Estado}
         */
        get: function () {
            return this._estado;
        },
        /**
         * Setter estado
         * @param {Estado} value
         */
        set: function (value) {
            this._estado = value;
        },
        enumerable: false,
        configurable: true
    });
    return Casilla;
}());
exports.Casilla = Casilla;
//# sourceMappingURL=casilla.js.map