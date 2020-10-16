import {Casilla} from "./casilla";
import {Estado} from "./estado";
import {Flota} from "./flota";
import {Coordenada} from "./coordenada";

export class Tablero{

    private _ancho:number;
    private _alto:number;
    private _flota: Flota;
    private _casillas:Array<any>=new Array<any>();

    constructor(ancho:number,alto:number) {
        this._ancho=ancho;
        this._alto=alto;
        this._flota=new Flota(ancho, alto);
        this.createTablero(this._ancho,this._alto)
        this.colocarFlota();
    }

    private createTablero(_ancho:number,_alto:number):void{
        for(let i=0;i<_alto;i++) {
            this._casillas[i]=new Array(this._ancho);
        }
    }

    private colocarFlota() {
        for (let i: number = 0; i < this._flota.barcos.length; i++) {
            for (let j: number = 0; j < this._flota.barcos[i].posiciones.length; j++) {
                this.addBarco(this._flota.barcos[i].posiciones[j].coordenada, this._flota.barcos[i].posiciones[j])
            }
        }
    }

    addBarco(coordenada:Coordenada,barco:Casilla){
        this._casillas[coordenada.x][coordenada.y]=barco;
    }

    public comprobarFlotaHundida(): boolean{
        return this._flota.comprobarBarcosHundidos()==this._flota.barcos.length;
    }

    public mostrarTablero(): String {
        let tablero: String = "";
        tablero+="    "
        for (let i: number = 0; i < this._ancho; i++) {
            tablero+=(i+1)+"  |  "
        }
        tablero+="\n"
        tablero += "    _________________________________________________________"
        tablero+="\n"
        for (let i: number = 0; i < this._alto; i++) {
            tablero += (i+1)+"  |   "
            for (let j: number = 0; j < this._ancho; j++) {
                if (this._casillas[i][j] != undefined) {
                    tablero += this.mostrarCasilla(this._casillas[i][j]);
                } else {
                    tablero += "X  |  "
                }
            }
            tablero += "____________________________________________________________"
            tablero += "\n"
        }

        return tablero
    }

    private mostrarCasilla(casilla: any) {
        if (casilla == "A") {
            return "A  |  ";
        }
        if (casilla.estado == Estado.indemne) {
            return  "X  |  ";
        } else if (casilla.estado == Estado.tocado) {
            return  "T  |  ";
        } else {
            return  "H  |  ";
        }
    }


    public comprobarCasilla(coordenada: Coordenada) {
        if (this._casillas[coordenada.x][coordenada.y] == undefined) {
            this._casillas[coordenada.x][coordenada.y] = "A";
            alert("Agua");
        } else if (this._casillas[coordenada.x][coordenada.y].estado == Estado.indemne) {
            this._casillas[coordenada.x][coordenada.y].estado=Estado.tocado;
            alert("Tocado");
        }
    }

    get casillas(): Array<any>[] {
        return this._casillas;
    }

    public getCasilla(coordenada: Coordenada): Casilla{
        return this._casillas[coordenada.x][coordenada.y];
    }

    get alto(): number {
        return this._alto;
    }
    get ancho(): number {
        return this._ancho;
    }
}