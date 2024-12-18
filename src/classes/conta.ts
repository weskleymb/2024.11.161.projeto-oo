
export class Conta {

    constructor(
        private _numero: number,
        private _titular: string,
        private _saldo: number
    ) {

    }

    public get numero(): number {
        return this._numero;
    }

    public get titular(): string {
        return this._titular;
    }

    public get saldo(): number {
        return this._saldo;
    }

    public set numero(numero: number) {
        this._numero = numero;
    }

    public set titular(titular: string) {
        this._titular = titular;
    }

    public depositar(valor: number): number {
        if (valor <= 0) {
            throw new Error(`Valor R$ ${valor} para depósito inválido`);
        }
        this._saldo += valor;
        return this._saldo;
    }

    public sacar(valor: number): number {
        if (valor <= 0) {
            throw new Error(`Valor R$ ${valor} para saque inválido`);
        }
        if (this._saldo < valor) {
            throw new Error(`Saldo insuficiente para saque de R$ ${valor}`);
        }
        this._saldo -= valor;
        return this._saldo;
    }

    public transferir(contaDestino: Conta, valor: number): number {
        this.sacar(valor);
        contaDestino.depositar(valor);
        return this._saldo;
    }

}