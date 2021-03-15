const nodemailer = require('nodemailer')
require('dotenv').config()


const {MAIN_EMAIL, MAIN_PASS} = process.env

module.exports = {
    getInfo: async(req, res) => {

        const {email, username} = req.session.user
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {user: MAIN_EMAIL, pass: MAIN_PASS}
        })
        let stuff = {
            from: 'Phantasy Costco!!!',
            to: email,
            subject: `Hey ${username}!`,
            text: `What's up ${username}??!? We're so glad you've clicked the email button. Congradulations on clicking the email button!`
        }
        transporter.sendMail(stuff, (error) => {
            if(error){
                console.log('bad things')
                res.sendStatus(500)
            }else{
                console.log('sent successfully')
                res.sendStatus(200)
            }
        })
        
    }
}