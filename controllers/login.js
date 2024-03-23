const loginRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/User')



// On commmence la logic backend connexion !!
loginRouter.post('/', async (request, response) => {
    const { mail, password } = request.body
    const user = await User.findOne({mail})
    const passwordCorrect = user === null 
    ? false
    : await bcrypt.compare(password, user.passwordHash)

    if(!passwordCorrect) {
        return response.status(401).json({error: 'Missing password!'})
    }

    const userToken = {
        mail: user.mail,
        id: user._id
    }

    const token = jwt.sign(userToken, process.env.SECRET_JWT)
    response.status(200).send({
        token,
        mail: user.mail,
        name: user.name,
        lastName: user.lastName,
        university: user.university,
        faculty: user.faculty,
        country: user.country,
        phone: user.phone,
        avatar: user.avatar
    })
})

module.exports = loginRouter