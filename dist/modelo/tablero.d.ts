import { Casilla } from "./casilla";
import { Coordenada } from "./coordenada";
export declare class Tablero {
    private _ancho;
    private _alto;
    private _flota;
    private _casillas;
    constructor(ancho: number, alto: number);
    private createTablero;
    private colocarFlota;
    addBarco(coordenada: Coordenada, barco: Casilla): void;
    comprobarFlotaHundida(): boolean;
    mostrarTablero(): String;
    private mostrarCasilla;
    comprobarCasilla(coordenada: Coordenada): void;
    get casillas(): Array<any>[];
    getCasilla(coordenada: Coordenada): Casilla;
    get alto(): number;
    get ancho(): number;
}
