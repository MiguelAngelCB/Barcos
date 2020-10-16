/*Es la clase
que contiene todos los barcos 
*/
import {Barco} from "./barco"
import {Estado} from "./estado"
import { GeneradorFlota } from "./generadorFlota";
import {Casilla} from "./casilla";

export class Flota{
    private _barcos: Barco[]=[];
    private _generadorFlota: GeneradorFlota;

    constructor(ancho:number,alto:number) {
        this._generadorFlota = new GeneradorFlota(ancho,alto,this._barcos);
        this.crearFlota();
    }

    crearFlota(){
        const barcos = [2, 2, 2, 2,3, 3, 3,4, 4,];
        for (let i: number = 0; i < barcos.length; i++) {
            let barco: Barco = this._generadorFlota.crearBarco(barcos[i])
            this._barcos[i] = barco;
        }
    }

    public comprobarBarcosHundidos(): Number {
        let posicionesTocadas: number=0;
        let barcosHundidos: number=0;
        for (let i: number = 0; i < this._barcos.length; i++) {
            posicionesTocadas = 0;
            for (let j: number = 0; j < this.barcoPosiciones(i).length; j++) {
                if (this._barcos[i].posiciones[j].estado == Estado.tocado) {
                    posicionesTocadas++;
                }
                if (posicionesTocadas == this.barcoPosiciones(i).length) {
                    this.hundirBarco(this.barcos[i]);
                    barcosHundidos++;
                }
            }
        }
        return barcosHundidos;
    }

    barcoPosiciones(index:number): Casilla[] {
        return this._barcos[index].posiciones;
    }


    private hundirBarco(barco: Barco) {
        for (let i = 0; i < barco.posiciones.length; i++) {
            barco.posiciones[i].estado = Estado.hundido;
        }
        alert("Hundido");
    }

    get barcos(): Barco[] {
        return this._barcos;
    }
}