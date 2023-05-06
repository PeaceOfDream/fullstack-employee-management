const express = require('express');
const router = express.Router();
const { login, register, current } = require('../controllers/users');
const { auth } = require('../middleware/auth');

/* ROUT: /api/user/login */
router.post('/login', login);
/* ROUT: /api/user/register */
router.post('/register', register);
/* ROUT: /api/user/current */
router.get('/current', auth, current);

module.exports = router;
