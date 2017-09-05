"use strict";

// creamos un objeto con closures
function creaAgente(nombre) {
  let edad = 0;
  return {
    getNombre: function() {
      // siempre tendre acceso al contexto que tenía creaAgente cuando me crearon
      return nombre;
    },
    setNombre: function(valor) {
      nombre = valor;
    },
    saluda: function() {
      console.log(`Hola, soy el agente ${nombre}`);
    }
  };
}

const brown = creaAgente('Brown');
const jones = creaAgente('Jones');

//console.log(brown.getNombre());
//brown.saluda();

setTimeout(brown.saluda, 1000);
setTimeout(jones.saluda, 1000);
