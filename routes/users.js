const express = require('express');
const { verifyToken } = require('../middlewares/authMiddlewares');
const { checkRole } = require('../middlewares/roleMiddlewares');
const { getUsers, getUserById } = require('../controllers/userControllers');

const router = express.router();


router.get('/', verifyToken, checkRole(['Admin']), getUsers);

router.get('/:id', verifyToken, getUserById);

module.exports = router;
