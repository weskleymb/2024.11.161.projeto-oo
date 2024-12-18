import { Carro } from './classes/carro.js';
import { Conta } from './classes/conta.js';

const irineu = new Conta(1, 'Irineu', 50);
const erick = new Conta(2, 'Erick', 100);

console.log(irineu.saldo);

irineu.depositar(100);

console.log(irineu.saldo);

irineu.sacar(50);

console.log(irineu.saldo);

erick.transferir(irineu, 50);

console.log(irineu.saldo);
console.log(erick.saldo);