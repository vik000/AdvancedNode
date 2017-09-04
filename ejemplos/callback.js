"use strict";

// funcion que recibe un texto y tras 2 segundos lo pinta en la consola
function escribeTras2Segundos(texto, callback) {
  setTimeout(() => {
    console.log(texto);
    callback();
  }, 2000);
}

escribeTras2Segundos('texto1', () => { // y cuando termines...
  // haces esto
  escribeTras2Segundos('texto2', () => { // y cuando termines...
    console.log('fin');
  });    
});
