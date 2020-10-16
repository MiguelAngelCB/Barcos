import { Coordenada } from './coordenada';
import { Casilla } from "./casilla";
import { Sentido } from './sentido';
export declare class Barco {
    private _size;
    private _posiciones;
    constructor(_size: number, inicial: Coordenada, direccion: Sentido);
    private crearBarco;
    compruebaSolapamiento(casilla: Casilla[]): boolean;
    /**
     * Getter size
     * @return {number}
     */
    get size(): number;
    /**
     * Getter posiciones
     * @return {Casilla[]}
     */
    get posiciones(): Casilla[];
}
