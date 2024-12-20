/**
 * Classe Carro representa um veículo com informações como modelo, fabricante, ano, cor e preço.
 * 
 * @class Carro
 * @constructor
 * @param {string} _modelo - Modelo do carro (ex.: "Civic").
 * @param {string} _fabricante - Fabricante do carro (ex.: "Honda").
 * @param {number} _ano - Ano de fabricação do carro (ex.: 2022).
 * @param {string} _cor - Cor do carro (ex.: "preto").
 * @param {number} _preco - Preço do carro (ex.: 75000.00).
 * 
 * Métodos:
 * - `get modelo()`: Retorna o modelo do carro em letras maiúsculas.
 * - `get fabricante()`: Retorna o fabricante do carro em letras maiúsculas.
 * - `get ano()`: Retorna o ano do carro.
 * - `get cor()`: Retorna a cor do carro em letras maiúsculas.
 * - `get preco()`: Retorna o preço do carro.
 * - `set modelo(string)`: Define o modelo do carro (aplica trim e converte para minúsculas).
 * - `set fabricante(string)`: Define o fabricante do carro, validando o tamanho do nome (mínimo 3 caracteres, aplica trim e converte para minúsculas).
 * - `set ano(number)`: Define o ano do carro, validando que esteja entre 1950 e 2050.
 * - `set cor(string)`: Define a cor do carro (aplica trim e converte para minúsculas).
 * - `set preco(number)`: Define o preço do carro, validando que seja maior que 0.
 * - `toString()`: Retorna uma string formatada com as informações do carro.
 */

class Carro {
    /**
     * Construtor da classe Carro.
     * @param {string} _modelo - Modelo do carro.
     * @param {string} _fabricante - Fabricante do carro.
     * @param {number} _ano - Ano de fabricação do carro.
     * @param {string} _cor - Cor do carro.
     * @param {number} _preco - Preço do carro.
     */
    constructor(
        private _modelo: string,
        private _fabricante: string,
        private _ano: number,
        private _cor: string,
        private _preco: number
    ) {
        this.modelo = _modelo;
        this.fabricante = _fabricante;
        this.ano = _ano;
        this.cor = _cor;
        this.preco = _preco;
    }

    /**
     * Obtém o modelo do carro.
     * @returns {string} O modelo do carro em letras maiúsculas.
     */
    public get modelo(): string {
        return this._modelo.toUpperCase();
    }

    /**
     * Define o modelo do carro.
     * @param {string} modelo - O novo modelo do carro.
     */
    public set modelo(modelo: string) {
        this._modelo = modelo.trim().toLowerCase();
    }

    /**
     * Obtém o fabricante do carro.
     * @returns {string} O fabricante do carro em letras maiúsculas.
     */
    public get fabricante(): string {
        return this._fabricante.toUpperCase();
    }

    /**
     * Define o fabricante do carro.
     * @param {string} fabricante - O novo fabricante do carro (mínimo 3 caracteres).
     * @throws {Error} Se o fabricante tiver menos de 3 caracteres.
     */
    public set fabricante(fabricante: string) {
        const tamanho = fabricante.trim().length;
        if (tamanho < 3) {
            throw new Error('Fabricante inválido');
        }
        this._fabricante = fabricante.trim().toLowerCase();
    }

    /**
     * Obtém o ano do carro.
     * @returns {number} O ano de fabricação do carro.
     */
    public get ano(): number {
        return this._ano;
    }

    /**
     * Define o ano do carro.
     * @param {number} ano - O novo ano do carro (entre 1950 e 2050).
     * @throws {Error} Se o ano estiver fora do intervalo permitido.
     */
    public set ano(ano: number) {
        if (ano < 1950 || ano > 2050) {
            throw new Error('Ano inválido');
        }
        this._ano = ano;
    }

    /**
     * Obtém a cor do carro.
     * @returns {string} A cor do carro em letras maiúsculas.
     */
    public get cor(): string {
        return this._cor.toUpperCase();
    }

    /**
     * Define a cor do carro.
     * @param {string} cor - A nova cor do carro.
     */
    public set cor(cor: string) {
        this._cor = cor.trim().toLowerCase();
    }

    /**
     * Obtém o preço do carro.
     * @returns {number} O preço do carro.
     */
    public get preco(): number {
        return this._preco;
    }

    /**
     * Define o preço do carro.
     * @param {number} preco - O novo preço do carro (maior que 0).
     * @throws {Error} Se o preço for menor ou igual a 0.
     */
    public set preco(preco: number) {
        if (preco <= 0) {
            throw new Error('Preço inválido');
        }
        this._preco = preco;
    }

    /**
     * Retorna uma string com as informações do carro.
     * @returns {string} Uma string formatada com o modelo, fabricante, ano, cor e preço do carro.
     */
    public toString(): string {
        return `Modelo: ${this.modelo}, Fabricante: ${this.fabricante}, Ano: ${this.ano}, Cor: ${this.cor}, Preço: ${this.preco}`;
    }
}

export default Carro;
