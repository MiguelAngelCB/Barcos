import { Barco } from "./barco";
import { Casilla } from "./casilla";
export declare class Flota {
    private _barcos;
    private _generadorFlota;
    constructor(ancho: number, alto: number);
    crearFlota(): void;
    comprobarBarcosHundidos(): Number;
    barcoPosiciones(index: number): Casilla[];
    private hundirBarco;
    get barcos(): Barco[];
}
