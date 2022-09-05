var express = require('express');
var router = express.Router();
const usuario = require('../models').usuario;
const paciente = require('../models').paciente;
const medico = require('../models').medico;

/* GET users listing. */
router.get('/usuario', function(req, res, next) {
    usuario.findAll({})
        .then(usuario => {
            res.json(usuario);
        })
        .catch(error => res.status(400).send(error))
});

router.get('/usuario/:ID_USUARIO', function(req, res, next) {
    usuario.findOne({
            where: {
                ID_USUARIO: parseInt(req.params.ID_USUARIO)
            }
        })
        .then(usuario => {
            res.json(usuario);
        })
        .catch(error => res.status(400).send(error))
});

/* GET doctors listing. */
router.get('/medico', function(req, res, next) {
    medico.findAll({})
        .then(medico => {
            res.json(medico);
        })
        .catch(error => res.status(400).send(error))
});

router.get('/medico/:ID_MEDICO', function(req, res, next) {
    medico.findOne({
            where: {
                ID_MEDICO: parseInt(req.params.ID_MEDICO)
            }
        })
        .then(medico => {
            res.json(medico);
        })
        .catch(error => res.status(400).send(error))
});

/* GET patients listing. */
router.get('/paciente', function(req, res, next) {
    paciente.findAll({})
        .then(paciente => {
            res.json(paciente);
        })
        .catch(error => res.status(400).send(error))
});

router.get('/paciente/:ID_PACIENTE', function(req, res, next) {
    paciente.findOne({
            where: {
                ID_PACIENTE: parseInt(req.params.ID_PACIENTE)
            }
        })
        .then(paciente => {
            res.json(paciente);
        })
        .catch(error => res.status(400).send(error))
});

module.exports = router;