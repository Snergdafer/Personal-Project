

module.exports = {
    makeCart: async(req, res) => {
        const db = req.app.get('db')
        const id = req.session.user.userId
        const cart = await db.cart.create_cart(id)
        res.status(200).send(cart)
    },
    addToCart: async(req, res) => {
        const db = req.app.get('db')
        const itemId = +req.params.id
        const userId = req.session.user.userId
        const cart = await db.cart.add_to_cart(userId, itemId)
        res.status(200).send(cart)
    },
    deleteFromCart: async(req, res) => {
        const db = req.app.get('db')
        const itemId = +req.params.id
        const userId = req.session.user.userId
        const cart = await db.cart.add_to_cart(itemId, userId)
        res.status(200).send(cart)
    },
    getCart: async(req, res) => {
        const db = req.app.get('db')
        const userId = req.session.user.userId
        const cart = await db.cart.get_cart(userId)
        res.status(200).send(cart)
    }
}