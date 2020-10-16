// Generar una serie de barcos que no se solapan
// y que sortean la posicion inicial de cada barco
//y el sentido en que crecen
// Ademas el array de barcos creado asegura que ninguno se ha 
// solapado.

import {Barco} from "./barco"
import {Sentido} from "./sentido";
import {Coordenada} from "./coordenada";

export class GeneradorFlota {
    private _flota:Barco[];

    constructor(private ancho: number,private alto: number,flota: Barco[]) {
        this._flota=flota;
    }

    public crearBarco(tamanoBarco: number): Barco {
        do {
            let sentido: Sentido = this.obtenerSentidoAleatorio();
            let coordenada: Coordenada = this.coordenadaVacia(tamanoBarco, sentido);
            var barco: Barco = new Barco(tamanoBarco, coordenada, sentido)
        } while (this.comprobarSolapamiento(barco))
        return barco;
    }

    private comprobarSolapamiento(barco: Barco, ) {
        for (let i: number = 0; i < this._flota.length; i++) {
            if (barco.compruebaSolapamiento(this._flota[i].posiciones)) {
                return true;
            }
        }
        return false;
    }

    private coordenadaVacia(tamanoBarco: number, sentidoBarco: Sentido): Coordenada {
        do {
            let puntoX:number = this.getRandom(0, this.alto)
            let puntoY:number = this.getRandom(0, this.ancho)
            var coordenada:Coordenada = new Coordenada(puntoX, puntoY);
        } while (this.salidaLimites(coordenada, tamanoBarco, sentidoBarco));
        return coordenada;
    }

    private salidaLimites(coordenadaBarco: Coordenada, tamanoBarco: number, sentido: Sentido) {
        let posicionBarco: number;
        let fueraLimites: boolean=false;
        if (sentido == Sentido.derecha) {
            posicionBarco = tamanoBarco + coordenadaBarco.x;
            if(posicionBarco > this.alto){
                fueraLimites = true
            }
        } else {
            posicionBarco = tamanoBarco + coordenadaBarco.y;
            if(posicionBarco > this.ancho){
                fueraLimites = true
            }
        }
        return fueraLimites;
    }

    private obtenerSentidoAleatorio(): Sentido {
        let sentido: Sentido;
        sentido = Sentido.abajo;
        if (this.getRandom(0, 1) == 1){
            sentido = Sentido.derecha
        }
        return sentido;
    }

    private getRandom(min: number, max: number): number {
        return Math.floor(Math.random() * (min - max) + max);
    }



}