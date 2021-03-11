const bcrypt = require('bcrypt')

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db')
        const {email, password, username} = req.body
        const findUser = await db.users.get_user(email)
        if(findUser[0]){
            return res.status(400).send('Email in use. Please log in')
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const [newUser] = await db.users.post_user([email, username, hash])
        req.session.user = {
            userId: newUser.user_id,
            email: newUser.email,
            username: newUser.username
        }
        res.status(200).send(req.session.user)
    },
    login: async (req, res) => {
        const db = req.app.get('db')
        const {email, password} = req.body
        const [findUser] = await db.users.get_user(email)
        if (!findUser) {
            return res.status(401).send('Username or Password incorrect')
        }
        const authenticated = bcrypt.compareSync(password, findUser.password)
        if(authenticated) {
            req.session.user = {
                userId: findUser.user_id,
                email: findUser.email,
                username: findUser.username
            }
            res.status(200).send(req.session.user)
        }else {
            res.status(401).send('Username or Password incorrect')
        }
    },
    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    },
    getUserSession: (req, res) => {
        if (req.session.user){
            res.status(200).send(req.session.user)
        } else {
            res.status(404).send('Please Log in')
        }
    },
    changeUserInfo: async (req, res) => {
        const db = req.app.get('db')
        const {newUsername, newEmail, email} = req.body
        const [findUser] = await db.users.get_user(email)
        const userId = findUser.user_id
        const [findDuplicate] = await db.users.get_user(newEmail)
        if(findDuplicate) {
            return res.status(409).send('Email is already in use')
        }
        const [updatedUser] = await db.users.update_user([newEmail, newUsername, userId])
        req.session.user = {
            ...req.session.user,
            email: updatedUser.email,
            username: updatedUser.username
        }
        res.status(200).send(req.session.user)
    }
}