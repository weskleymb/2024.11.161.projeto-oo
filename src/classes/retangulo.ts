/**
 * Classe Retangulo representa um retângulo com base e altura, permitindo calcular área e perímetro.
 *
 * @class Retangulo
 * @constructor
 * @param {number} base - Base do retângulo.
 * @param {number} altura - Altura do retângulo.
 *
 * Métodos:
 * - `get base()`: Obtém a base do retângulo.
 * - `set base(base: number)`: Define a base do retângulo.
 * - `get altura()`: Obtém a altura do retângulo.
 * - `set altura(altura: number)`: Define a altura do retângulo.
 * - `perimetro()`: Calcula e retorna o perímetro do retângulo.
 * - `area()`: Calcula e retorna a área do retângulo.
 */
class Retangulo {
    // Atributos
    private _base: number;
    private _altura: number;

    /**
     * Construtor da classe Retangulo.
     * @param {number} base - Base do retângulo.
     * @param {number} altura - Altura do retângulo.
     */
    constructor(base: number, altura: number) {
        this._base = base;
        this._altura = altura;
    }

    /**
     * Obtém a base do retângulo.
     * @returns {number} A base do retângulo.
     */
    get base(): number {
        return this._base;
    }

    /**
     * Define a base do retângulo.
     * @param {number} base - O novo valor da base.
     */
    set base(base: number) {
        this._base = base;
    }

    /**
     * Obtém a altura do retângulo.
     * @returns {number} A altura do retângulo.
     */
    get altura(): number {
        return this._altura;
    }

    /**
     * Define a altura do retângulo.
     * @param {number} altura - O novo valor da altura.
     */
    set altura(altura: number) {
        this._altura = altura;
    }

    /**
     * Calcula o perímetro do retângulo.
     * @returns {number} O perímetro do retângulo.
     */
    perimetro(): number {
        return 2 * (this._base + this._altura);
    }

    /**
     * Calcula a área do retângulo.
     * @returns {number} A área do retângulo.
     */
    area(): number {
        return this._base * this._altura;
    }
}

export default Retangulo;
