import Carro from './classes/carro.js';
import Conta from './classes/conta.js';
import Retangulo from './classes/retangulo.js';

import PromptSync from 'prompt-sync';

const prompt = PromptSync();

let altura = parseFloat(prompt('Digite a altura do retângulo: '));
let base = parseFloat(prompt('Digite a base do retângulo: '));

const retangulo = new Retangulo(base, altura);

console.log(`Área: ${retangulo.area()}`);
console.log(`Perímetro: ${retangulo.perimetro()}`);

base = parseFloat(prompt('Digite a base do retângulo: '));
retangulo.base = base;
altura = parseFloat(prompt('Digite a altura do retângulo: '));
retangulo.altura = altura;

console.log(`Área: ${retangulo.area()}`);
console.log(`Perímetro: ${retangulo.perimetro()}`);