var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hola', (req, res, next) => {
  res.render('hola');
});

// recibimos parámetros en la ruta
router.get('/ruta/:algo', (req, res, next) => { // podemos poner '/ruta/:algo? y seria opcional
  console.log('parámetro en ruta', req.params);
  res.send('ok ' + req.params.algo);
});

router.get('/calle/:calle/numero/:numero([0-9]+)/piso/:piso/puerta/:puerta(a|b|c)?', (req, res, next) => {
  console.log('parámetro en ruta', req.params);
  res.send('ok');
});

router.get('/query', (req, res, next) => {
  console.log('parámetro en query string', req.query);
  res.send('ok');
});

router.post('/ruta', (req, res, next) => {
  console.log('recibimos body con', req.body);
  res.send('ok');
});

module.exports = router;
