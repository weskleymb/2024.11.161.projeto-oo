class Retangulo {

    // Atributos
    private _base: number;
    private _altura: number;

    // Construtor
    constructor(base: number, altura: number) {
        this._base = base;
        this._altura = altura;
    }

    // Getters
    get base() {
        return this._base;
    }

    get altura() {
        return this._altura;
    }

    // Setters
    set base(base: number) {
        this._base = base;
    }

    set altura(altura: number) {
        this._altura = altura;
    }

    // Métodos
    perimetro(): number {
        return 2 * (this._base + this._altura);
    }

    area(): number {
        return this._base * this._altura;
    }

}

export default Retangulo;
