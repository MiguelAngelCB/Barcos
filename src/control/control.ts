import {Coordenada} from "../modelo/coordenada";
import {Tablero} from "../modelo/tablero";

export class Control {
    private _alto: number = 8;
    private _ancho: number = 12;
    private _tablero: Tablero = new Tablero(this._ancho,this._alto);


    public play() {
            alert("Bienvenidos al juego de los Barcos")
        do {
            alert(this._tablero.mostrarTablero())
            this._tablero.comprobarCasilla(this.pedirCoordenada())
        }while(!this._tablero.comprobarFlotaHundida())
    }

    private pedirCoordenada(): Coordenada {
        return new Coordenada(this.solicitarPuntoCoordenada(this._tablero.alto,"Y"), this.solicitarPuntoCoordenada(this._tablero.ancho,"X"))
    }

    private solicitarPuntoCoordenada(limite:number,punto:string): number {
        do {
            var coordenada:any= prompt("Dame un punto del eje "+punto);
            if (!coordenada.match("\\d+")) {
                coordenada = 0;
            }else {
                coordenada-=1;
            }
        } while (!this.comprobarCoordenada(coordenada, limite))
        return coordenada;
    }


    private comprobarCoordenada(coordenada: number, maximo: number): boolean {
        let minimo:number=0;
        if (coordenada>=minimo && coordenada < maximo) {
            return true
        }
        return false;
    }


}