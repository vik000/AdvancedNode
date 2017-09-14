"use strict";

const express = require('express');
const router = express.Router();

// Le pedimos a mongoose que nos de el modelo de Agente
// const mongoose = require('mongoose');
// const Agente = mongoose.model('Agente');

const Agente = require('../../models/Agente');

// GET /
router.get('/', (req, res, next) => {

  const name = req.query.name;
  const age = req.query.age;
  const skip = parseInt(req.query.skip);
  const limit = parseInt(req.query.limit);

  const filter = {};

  if (name) {
    filter.name = name;
  }

  if (age) {
    filter.age = age;
  }

  // recuperar una lista de agentes
  Agente.lista(filter, skip, limit).then( lista => {
    res.json({ success: true, rows: lista });
  }).catch( err => {
    console.log('Error', err);
    next(err); // para que retorne la página de error
    return;
  });
});

// GET /:id
// Recupera un solo documento
router.get('/:id', (req, res, next) => {
  const _id = req.params.id;
  Agente.findOne({ _id: _id }, (err, agente) => {
    if (err) {
      console.log('Error', err);
      next(err); // para que retorne la página de error
      return;
    }
    res.json({ success: true, row: agente});
  })
});

// POST / 
// Crear un agente
router.post('/', (req, res, next) => {
  console.log(req.body);
  
  // creamos un nuevo agente
  const agente = new Agente(req.body);

  // lo guardamos en la base de datos
  agente.save((err, agenteGuardado) => {
    if (err) {
      console.log('Error', err);
      next(err); // para que retorne la página de error
      return;
    }
    res.json({ success: true, result: agenteGuardado});
  });
});

// PUT /
// Actualizar un agente
router.put('/:clavedelagente', (req, res, next) => {
  const _id = req.params.clavedelagente;
  // actualizo con {new: true} para que retorne el agenteActualizado y no el anterior
  Agente.findOneAndUpdate({_id: _id}, req.body, {new: true}, (err, agenteActualizado) => {
    if (err) {
      console.log('Error', err);
      next(err); // para que retorne la página de error
      return;
    }
    res.json({ success: true, result: agenteActualizado});    
  });
});

router.delete('/:id', (req, res, next) => {
  const _id = req.params.id;
  Agente.remove({ _id: _id }, (err) => {
    if (err) {
      console.log('Error', err);
      next(err); // para que retorne la página de error
      return;
    }
    res.json({ success: true });
  })
});

module.exports = router;