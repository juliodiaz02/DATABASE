const {Router} = require('express');
const{userslist, listUserByID} = require('../controllers/users');
const router = Router();
//localhost:3000/api/v1/users/
router.get('/', userslist);
router.get('/:id', listUserByID)

module.exports = router;