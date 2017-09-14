"use strict";

// funciones que devuelven promesas

function conArroz(plato) {
  return new Promise((resolve, reject) => {
    resolve(plato + ' arroz');
  });
}

function conAjo(plato) {
  return new Promise((resolve, reject) => {
    //resolve(plato + ' ajo');
    reject('error fatal');
  }); 
}

function con(plato, ingrediente) {
  return new Promise((resolve, reject) => {
    resolve(plato + ' ' + ingrediente);
  }); 
}

const paella = 'paella con';

conArroz(paella)
  .then(conAjo)
  .then((plato) => {
    console.log('paso por con');
    return con(plato, 'conejo');
  })
  .then((plato) => {
  console.log(plato);
}).catch(err => {
  console.log('Error:', err);
});