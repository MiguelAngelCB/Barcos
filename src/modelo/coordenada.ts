import { Sentido } from "./sentido";

export class Coordenada {
  //La forma ts para declarar propiedades obligatorias
  constructor(private _x: number, private _y: number) {}

  public get x(): number {
    return this._x;
  }
  public set x(xs: number) {
    this._x = xs;
  }
  public get y(): number {
    return this._y;
  }
  public set y(ys: number) {
    this._y = ys;
  }
  //Hay cosas java que siempre vienen bien
  public equals(coordena: Coordenada): boolean {
    return this.x == coordena.x && this.y == coordena.y;
  }
  public mover(direccion: Sentido) {
    if (direccion == Sentido.abajo) {
      this.bajar();
    } else {
      this.avanzar();
    }
  }

  public bajar() {
    this.y++;
  }
  public avanzar() {
    this.x++;
  }
}
