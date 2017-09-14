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

const promesa = sleep(2000);

console.log(promesa);

promesa.then((res) => {
  // la promesa se ha cumplido, o sea que ha acabado bien
  console.log('cumplido!');
}).catch((err) => {
  // la promesa ha fallado
  console.log('Error!', err);
})

promesa.then((res) => {
  // la promesa se ha cumplido, o sea que ha acabado bien
  console.log('ok!');
});