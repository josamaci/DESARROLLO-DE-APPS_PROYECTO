var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/usuario', function(req, res, next) {


    models.usuario.findAll({
            include: [{
                model: models.usuario,
                as: 'ID_USUARIO'
            }],
        })
        .then(usuario => {
            res.json(usuario)
        })
        .catch(error => res.status(400).send(error))


});

module.exports = router;