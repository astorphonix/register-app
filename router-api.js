const apiRouter = require('express').Router()
const userController = require('./controller/userController')
const postController = require('./controller/postController')
const followController = require('./controller/followController')


apiRouter.post('/login', userController.apiLogin)
apiRouter.post('/create-post', userController.apiMustBeLoggedIn, postController.apiCreate)
module.exports = apiRouter

