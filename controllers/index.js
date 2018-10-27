const router = require('express').Router();

// const attachDBConnection = require('./../middlewares/attach-db-connection');
// const checkRealm = require('./../helpers/check-realm');
const Users = require('./user.controller');
const Todos = require('./todo.controller');
/*
    1. Fetch the tenant DB schema (check-realm)
    2. Update the connection by changing the tenant
    3. Attach the updated connection to the request object    
 */

// router.get('/check-realm', checkRealm);

// router.use('/', attachDBConnection);

router.use('/Users', Users);

router.use('/Todos', Todos);

// Authorization to be added for below routes
module.exports = router;
