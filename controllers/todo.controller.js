const router = require('express').Router();
const models = require('./../models');

router.get('/:user_id', async (req, res) => {
    models.todos.findAll({
        'where': {
            'user_id': req.params.user_id
        }
    }).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.send(err);
    });
});

router.post('/', async (req, res) => {
    models.todos.create(req.body).then((response) => {
        res.send(response);
    })
});

router.put('/:id', async (req, res) => {
    models.todos.update(req.body, {
        'where': {
            'id': req.params.id
        }
    }).then(result => {
        res.send(result);
    });
});

router.delete('/:id', async (req, res) => {
    models.todos.destroy({
        'where': {
            'id': req.params.id
        }
    }).then(status => {
        if (status === 1) {
            res.json({
                'message': 'Todo deleted succesfully'
            });
        } else {
            res.sendStatus(500);
        }
    }).catch(err => {
        res.send(err);
    })
});

module.exports = router;