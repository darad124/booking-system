const express = require('express');
const { register, login, getProfile } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const { validateRequest, userSchema } = require('../middleware/validationMiddleware');
const asyncHandler = require('../utils/asyncHandler');

const router = express.Router();

router.post('/register', validateRequest(userSchema), asyncHandler(register));
router.post('/login', asyncHandler(login));
router.get('/profile', authMiddleware, asyncHandler(getProfile));

module.exports = router;