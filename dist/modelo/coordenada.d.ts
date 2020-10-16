import { Sentido } from "./sentido";
export declare class Coordenada {
    private _x;
    private _y;
    constructor(_x: number, _y: number);
    get x(): number;
    set x(xs: number);
    get y(): number;
    set y(ys: number);
    equals(coordena: Coordenada): boolean;
    mover(direccion: Sentido): void;
    bajar(): void;
    avanzar(): void;
}
