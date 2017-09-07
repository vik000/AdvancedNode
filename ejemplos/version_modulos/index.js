"use strict";

const versionModulo = require('./versionModulo');
const fs = require('fs');
const async = require('async');

function versionModulos(callback) {
  // leer contenido de node_modules
  fs.readdir('./node_modules', (err, lista) => {
    if (err) {
      callback(err);
      return;
    }
    console.log(lista);
    // sacar nombre y version de cada modulo
    async.concat(lista, function iterador(item, callbackIteracionEnCurso) {

      // excluimos la carpeta .bin y otros posibles ficheros ocultos
      if (item[0] === '.') { // si la primera letra es un '.'
        process.nextTick(() => { // no hacemos nada, y metemos la 
                                 // llamada en la siguiente vuelta del event loop
          callbackIteracionEnCurso(null);
        });
        return;
      }

      // ya tenemos el nombre del modulo, recogemos su versión
      versionModulo(item, (error, version) => {
        if (error) {
          callbackIteracionEnCurso(error);
          return;
        }
        // no ha fallado, devolvemos el nombre del modulo y la version
        callbackIteracionEnCurso(null, {item, version});
      });

    }, callback);
  });


  // devolver la lista de modulos
}


versionModulos((err, listaModulos) => {
  if (err) {
    console.log('Hubo un error', err);
    return;
  }
  console.log(listaModulos);
});

