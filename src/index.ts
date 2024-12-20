
import Retangulo from './classes/retangulo.js';

import PromptSync from 'prompt-sync';

const prompt = PromptSync();

let altura = parseFloat(prompt('Digite a altura do retângulo: '));
let base = parseFloat(prompt('Digite a base do retângulo: '));

const retangulo = new Retangulo(base, altura);

console.log(`Área: ${retangulo.area()}`);
console.log(`Perímetro: ${retangulo.perimetro()}`);

retangulo.base = parseFloat(prompt('Digite a base do retângulo: '));
retangulo.altura = parseFloat(prompt('Digite a altura do retângulo: '));

console.log(`Área: ${retangulo.area()}`);
console.log(`Perímetro: ${retangulo.perimetro()}`);
