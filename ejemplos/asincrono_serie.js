"use strict";

// funcion que recibe un texto y tras 2 segundos lo pinta en la consola
function escribeTras2Segundos(texto, callback) {
  setTimeout(() => {
    console.log(texto);
    callback();
  }, 2000);
}

// bucle asincrono en serie
// llamar a una función n veces en serie
function serie(n, fn, callbackFinalizacion) {
  if (n == 0) { // he terminado
    callbackFinalizacion();
    return;
  }
  n = n - 1;
  fn('texto' + n, () => {
    serie(n, fn, callbackFinalizacion);
  })
}

serie(5, escribeTras2Segundos, () => {
  console.log('fin');
});
