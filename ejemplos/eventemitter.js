"use strict";

const EventEmitter = require('events');

// crear un emisor de eventos
const emisor = new EventEmitter();

// nos suscribimos al evento
emisor.on('suena telefono', (quien) => {
  if (quien === 'madre') {
    return;
  }
  console.log('ring ring');
});
emisor.once('suena telefono', () => {
  console.log('brrr brrr');
});


// emitit evento
emisor.emit('suena telefono', '1madre');
emisor.emit('suena telefono', '1madre');
