/**
 * Classe Conta representa uma conta bancária com informações como número, titular e saldo.
 *
 * @class Conta
 * @constructor
 * @param {number} numero - Número da conta bancária.
 * @param {string} titular - Nome do titular da conta.
 * @param {number} saldo - Saldo inicial da conta.
 *
 * Métodos:
 * - `get numero()`: Obtém o número da conta.
 * - `set numero(numero: number)`: Define o número da conta.
 * - `get titular()`: Obtém o nome do titular da conta.
 * - `set titular(titular: string)`: Define o nome do titular da conta.
 * - `get saldo()`: Obtém o saldo atual da conta.
 * - `depositar(valor: number)`: Adiciona um valor ao saldo da conta, retornando o novo saldo.
 * - `sacar(valor: number)`: Subtrai um valor do saldo da conta, retornando o novo saldo.
 * - `transferir(contaDestino: Conta, valor: number)`: Transfere um valor para outra conta, retornando o saldo atualizado da conta de origem.
 */
class Conta {
    private _numero: number;
    private _titular: string;
    private _saldo: number = 0;

    /**
     * Construtor da classe Conta.
     * @param {number} numero - Número da conta bancária.
     * @param {string} titular - Nome do titular da conta.
     * @param {number} saldo - Saldo inicial da conta.
     */
    constructor(numero: number, titular: string, saldo: number) {
        this._numero = numero;
        this._titular = titular;
        this.depositar(saldo);
    }

    /**
     * Obtém o número da conta.
     * @returns {number} O número da conta.
     */
    public get numero(): number {
        return this._numero;
    }

    /**
     * Define o número da conta.
     * @param {number} numero - O novo número da conta.
     */
    public set numero(numero: number) {
        this._numero = numero;
    }

    /**
     * Obtém o nome do titular da conta.
     * @returns {string} O nome do titular.
     */
    public get titular(): string {
        return this._titular;
    }

    /**
     * Define o nome do titular da conta.
     * @param {string} titular - O novo nome do titular.
     */
    public set titular(titular: string) {
        this._titular = titular;
    }

    /**
     * Obtém o saldo atual da conta.
     * @returns {number} O saldo atual da conta.
     */
    public get saldo(): number {
        return this._saldo;
    }

    /**
     * Adiciona um valor ao saldo da conta.
     * @param {number} valor - Valor a ser depositado.
     * @returns {number} O novo saldo da conta.
     * @throws {Error} Se o valor for menor ou igual a zero.
     */
    public depositar(valor: number): number {
        if (valor <= 0) {
            throw new Error(`Valor R$ ${valor} para depósito inválido`);
        }
        this._saldo += valor;
        return this.saldo;
    }

    /**
     * Subtrai um valor do saldo da conta.
     * @param {number} valor - Valor a ser sacado.
     * @returns {number} O novo saldo da conta.
     * @throws {Error} Se o valor for menor ou igual a zero.
     * @throws {Error} Se o saldo for insuficiente para o saque.
     */
    public sacar(valor: number): number {
        if (valor <= 0) {
            throw new Error(`Valor R$ ${valor} para saque inválido`);
        }
        if (this.saldo < valor) {
            throw new Error(`Saldo insuficiente para saque de R$ ${valor}`);
        }
        this._saldo -= valor;
        return this._saldo;
    }

    /**
     * Transfere um valor para outra conta.
     * @param {Conta} contaDestino - Conta de destino para a transferência.
     * @param {number} valor - Valor a ser transferido.
     * @returns {number} O saldo atualizado da conta de origem.
     * @throws {Error} Se o saldo for insuficiente para a transferência.
     */
    public transferir(contaDestino: Conta, valor: number): number {
        this.sacar(valor);
        contaDestino.depositar(valor);
        return this._saldo;
    }
}

export default Conta;
