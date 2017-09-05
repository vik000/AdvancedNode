"use strict";

const calculadora = require('./calculadora');

calculadora.nombre = 'Texas';

const calculadora2 = require('./calculadora'); // los siguientes require obtienen lo que se 
                                        // exportó la primera vez
console.log(calculadora2.nombre);


console.log(calculadora2.resta(2,3));
