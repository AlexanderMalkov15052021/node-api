const Router = require('express')

const router = new Router()

const userController = require('../controller/user.controller')

router.post('/user', userController.createUser)
router.get('/user', userController.getUser)
router.get('/user/:id', userController.getOneUser)
router.put('/user', userController.updateUser)
router.delete('/user/:id', userController.deleteUser)
router.get('/user/create-table', userController.createTable)

module.exports = router