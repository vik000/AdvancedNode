"use strict";

// definimos un constructor de objetos
function Persona(nombre) {
  this.nombre = nombre;
}

// construimos un objeto
const pepe = new Persona('Pepe');

// añadir propiedades al prototipo de las personas
Persona.prototype.saluda = function() {
  console.log(`Hola me llamo ${this.nombre}`);
}

pepe.saluda();

// Herencia (simple) de persona -----------------------------------

function Agente(nombre) {
  // ejecutamos el constructor de personas con mi this
  Persona.call(this, nombre); // seria como hacer esto Persona(nombre)
}

// heredamos sus propiedades y metodos
Agente.prototype = new Persona('soy un prototipo');

const smith = new Agente('Smith');

smith.saluda();

// Herencia múltiple -----------------------------------------------

// Mixin Superhéroe
function Superheroe() {
  this.vuela = function() {
    console.log(this.nombre, 'vuela');
  }
  this.esquivaBalas = function() {
    console.log(this.nombre, 'esquiva balas');
  }
}

// copiamos todas las propiedades de Superheroe al prototipo de Agente
Object.assign(Agente.prototype, new Superheroe());

smith.vuela();
smith.esquivaBalas();
