const router = require('express').Router()
const userController = require('../controllers/userController')


router.get('/validate', userController.userValidate);
router.post('/register',userController.userRegister)
router.post('/login',userController.userLogin)
router.get('/logout',userController.userLogout)


module.exports = router