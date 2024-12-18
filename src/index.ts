import { Carro } from './classes/carro.js';
import { Conta } from './classes/conta.js';

const irineu = new Conta(1, 'Irineu', 50);

console.log(irineu.saldo);

console.log(irineu.saldo);

irineu.depositar(100);

console.log(irineu.saldo);