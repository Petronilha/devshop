const init = db => {
    const express = require('express')
    const app = express()
    
    const category = require('./models/category')
    const router = require('./router')
    
    app.set('view engine', 'ejs')
    app.use(express.static('public'))
    
    //middleware
    app.use(async(req, res, next) => {
        const categories = await category.getCategories(db)()
        res.locals = {
            categories
        }
        next()
    })
    
    app.use(router(db))
    return app
}
module.exports = init