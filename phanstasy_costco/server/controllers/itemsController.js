

module.exports = {
    getItems: async(req, res) => {
        const db = req.app.get('db')
        const items = await db.items.get_all_items()
        res.status(200).send(items)
    },
    getItem: async(req, res) => {
        const db = req.app.get('db')
        const id = req.params.id
        const [item] = await db.items.get_item(id)
        res.status(200).send(item)
    },
    getItemType: async(req, res) => {
        const db = req.app.get('db')
        const {type} = req.body
        const items = await db.items.get_items_by_type(type)
        res.status(200).send(items)
    },
    getItemAttribute: async(req, res) => {
        const db = req.app.get('db')
        const {attribute} = req.body
        const items = await db.items.get_items_by_attribute(attribute)
        res.status(200).send(items)    
    },
    getItemCost: async(req, res) => {
        const db = req.app.get('db')
        const {max, min} = req.body
        const items = await db.items.get_items_by_cost(min, max)
        res.status(200).send(items)    
    },
    createItem: async(req, res) => {
        const db = req.app.get('db')
        const {name, type, attributes, image, description, cost} = req.body
        const items = await db.items.post_item(name, type, attributes, image, description, cost)
        res.status(200).send(items)
    },
    deleteItem: async(req, res) => {
        const db = req.app.get('db')
        const id = +req.params.id
        const items = await db.items.delete_item(id)
        res.status(200).send(items)
    },
    updateItem: async(req, res) => {
        const db = req.app.get('db')
        const {name, type, attributes, image, description, cost, id} = req.body
        const items = await db.items.update_items(name, type, attributes, image, description, cost, id)
        res.status(200).send(items)
    }
}