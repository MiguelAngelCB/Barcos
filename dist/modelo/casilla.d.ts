import { Estado } from "./estado";
import { Coordenada } from "./coordenada";
export declare class Casilla {
    private _coordenada;
    private _estado;
    constructor(_coordenada: Coordenada, _estado: Estado);
    /**
     * Getter coordenada
     * @return {Coordenada}
     */
    get coordenada(): Coordenada;
    /**
     * Getter estado
     * @return {Estado}
     */
    get estado(): Estado;
    /**
     * Setter coordenada
     * @param {Coordenada} value
     */
    set coordenada(value: Coordenada);
    /**
     * Setter estado
     * @param {Estado} value
     */
    set estado(value: Estado);
}
