const router = require('express').Router();
const models = require('./../models');

router.get('/', async (req, res) => {
    // res.send("Users Data");
    console.log('Enter....');
    models.todos.findAll({include: [ models.user_detail ]}).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.send(err);
    });
});

router.post('/', async (req, res) => {
    // console.log(req.body);
    models.todos.create(req.body).then((response) => {
        console.log(response);
        res.send(response);
    })
});


module.exports = router;