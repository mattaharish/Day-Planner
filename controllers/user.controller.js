const router = require('express').Router();
const models = require('./../models');

router.get('/', async (req, res) => {
    models.user_detail.findAll({}).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.send(err);
    });
});

router.post('/', async (req, res) => {
    models.user_detail.create(req.body).then((response) => {
        res.send(response);
    })
});

router.get('/:id', async (req, res) => {
    models.user_detail.find({
        'where': {
            'id': req.params.id
        }
    }).then(result => {
        res.send(result);
    })
});

router.put('/:id', async (req, res) => {
    models.user_detail.update(req.body, {
        'where': {
            'id': req.params.id
        }
    }).then(response => {
        res.send(response);
    });
});

router.delete('/:id', async (req, res) => {
    models.user_detail.destroy({
        'where': {
            'id': req.params.id
        }
    }).then(result => {
        res.send(result);
    });
});

module.exports = router;