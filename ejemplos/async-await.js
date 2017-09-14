"use strict";

// función que retorna una promesa
function sleep(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(5); // resolvemos la promesa
      // reject(new Error('fatal'));
    }, ms);
  });
}

async function main() {
  const resultado = await sleep(2000);
  console.log('Pasaron los segundos', resultado);
}

main();