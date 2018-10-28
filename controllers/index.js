const router = require('express').Router();

const Users = require('./user.controller');
const Todos = require('./todo.controller');

router.use('/Users', Users);

router.use('/Todos', Todos);

module.exports = router;