import { Carro } from './classes/carro.js';
import { Conta } from './classes/conta.js';

const irineu = new Conta(1, 'Irineu', 50);
const erick = new Conta(2, 'Erick', 100);

console.log(`Saldo de Irineu: R$ ${irineu.saldo}`);
console.log(`Saldo de Erick: R$ ${erick.saldo}`);

irineu.transferir(erick, 10);

console.log(`Saldo de Irineu: R$ ${irineu.saldo}`);
console.log(`Saldo de Erick: R$ ${erick.saldo}`);
