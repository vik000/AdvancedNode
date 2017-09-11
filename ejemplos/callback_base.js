"use strict";

// podria llamar a fin() aqui

function suma(a, b, callback) {
  //const resultado = a + b; // operacion síncrona
  // devolvemos resultado con return como siempre

  // operación asíncrona
  setTimeout(() => {
    const resultado = a + b;
    // return resultado; // mal -- nadie recogerá este resultado
    callback(null, resultado);
  }, 1000);

  // el código sigue ejecutándose por aqui cuando empieza a esperar los 1000ms
  console.log('fin de funcion, ocurre antes de sumar');
}

function fin(err, resultado) { // esto es el callback
  if (err) {
    // ...
  }
  console.log('fin del programa, resultado', resultado);
}

suma(2, 7, fin);
