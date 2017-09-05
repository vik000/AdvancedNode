"use strict";

// constructor de objetos
function Coche(ruedas) {
  this.ruedas = ruedas;

  // usamos this dentro del método
  this.cuantasRuedas = function() {
    console.log(`tiene ${this.ruedas} ruedas`);
    
    /* En frontend (browser) perdemos el this con JQuery
    var self = this;
    $('.parrafo').click(function() {
      // this aqui dentro no apunta al coche
      // apuntaría al alemento que JQuey ha seleccionado
    });*/
        
  }
}


const todoterreno = new Coche(4);
const autobus = new Coche(8);

// todoterreno.cuantasRuedas();

const funcion1 = todoterreno.cuantasRuedas;
// al no tener "todoterreno." a la izquierda perdemos el "this"
funcion1.call(todoterreno); // podemos invocar la función el 'this' que nosotros queramos

// con .bind fijamos un 'this' a la función para que siempre lo tenga
setTimeout( todoterreno.cuantasRuedas.bind(todoterreno), 1000);