require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const user = require('./controllers/userController')
const item = require('./controllers/itemsController')
const cart = require('./controllers/cartController')

const app = express()
const {SESSION_SECRET, SERVER_PORT, CONNECTION_STRING} = process.env


app.use(express.json())
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then( db => {
    app.set('db', db)
    console.log('CONNECTED TO DATABASE')
})


//user endpoints 
app.post('/auth/register', user.register)
app.post('/auth/login', user.login)
app.post('/auth/logout', user.logout)
app.get('/auth/user', user.getUserSession)
app.put('/auth/update', user.changeUserInfo)

//item endpoints
app.get('/items/all', item.getItems)
app.get('/items/type', item.getItemType)
app.get('/items/attribute', item.getItemAttribute)
app.get('/items/cost', item.getItemCost)
app.post('/items/add', item.createItem)
app.delete('/items/remove/:id', item.deleteItem)
app.put('/items/update', item.updateItem)

//cart endpoints
app.post('/cart/new', cart.makeCart)
app.post('/cart/add/:id', cart.addToCart)
app.delete('/cart/remove/:id', cart.deleteFromCart)
app.get('/cart/get', cart.getCart)


app.listen(SERVER_PORT, () => console.log(`server listening on port ${SERVER_PORT}`))