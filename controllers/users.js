const userRouter = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/User')
const uploadFile = require('../utils/multerConfig')


userRouter.get('/', async (request, response) => {
    const user = await User.find({})
    response.json(user)
})


userRouter.post('/', uploadFile.single('avatar'), async (request, response) => {
    const { name, lastName, mail, university, faculty, phone, country, password } = request.body
    const avatar = request.file ? request.file.path : null
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)

    const userSend = new User({
        name,
        lastName,
        mail,
        university,
        faculty,
        phone,
        country,
        passwordHash,
        avatar
    })

    const savedUser = await userSend.save()
    response.status(200).json(savedUser)
})


module.exports = userRouter