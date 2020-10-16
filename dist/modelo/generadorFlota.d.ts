import { Barco } from "./barco";
export declare class GeneradorFlota {
    private ancho;
    private alto;
    private _flota;
    constructor(ancho: number, alto: number, flota: Barco[]);
    crearBarco(tamanoBarco: number): Barco;
    private comprobarSolapamiento;
    private coordenadaVacia;
    private salidaLimites;
    private obtenerSentidoAleatorio;
    private getRandom;
}
