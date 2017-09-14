"use strict";

const mongoose = require('mongoose');

// definir un esquema
const agenteSchema = mongoose.Schema({
  name: {
    type: String,
    // index: true
  },
  age: Number
}, { 
  // collection: 'agentes' // para elegir nosotros como se llamará la colección 
                           // en la base de datos
});

// Añadimos método estático
agenteSchema.statics.lista = function( filter, skip, limit, callback) {
  const query = Agente.find(filter);
  query.skip(skip);
  query.limit(limit);

  return query.exec(callback); // ejecutamos la consulta
};


// crear el modelo
const Agente = mongoose.model('Agente', agenteSchema);

// No es necesario exportar el modelo 
// ya que mongoose ya lo conoce
module.exports = Agente;
