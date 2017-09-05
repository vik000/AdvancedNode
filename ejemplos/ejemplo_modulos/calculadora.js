"use strict";

console.log('Inicializo el módulo calculadora');

function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}
module.exports = {
  suma: suma, // en JS cuando la prio¡edad se llama igual que el contenido podemos hacer:
  // suma, resta
  resta: resta,
  nombre: ''
}; // exportamos solo una función