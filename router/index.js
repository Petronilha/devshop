const init = db => {
    const router = require('express').Router()

    const home = require('../controllers/home')
    const categories = require('./categories')
    const products = require('./products')

    
    router.get('/', home.getIndex)
    router.use('/categoria', categories(db))
    router.use('/produto', products(db))

    return router
}
module.exports = init