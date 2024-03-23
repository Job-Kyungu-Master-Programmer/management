const userRouter = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/User')
const uploadFile = require('../utils/multerConfig')
const cloudinary = require('../utils/cloud') 

userRouter.get('/', async (request, response) => {
    const user = await User.find({}).populate('pubs', {title:1})
    response.json(user)
})


userRouter.get('/:id', async (request, response) => { // Dans cette route nous afficherons chaque user avec ces notes creer
    try {
        // const body = request.body 
        const user = await User.findById(request.params.id).populate('pubs')

        if (!user || !user.pubs) {
            return response.status(404).json({ error: 'Publication or user not found' });
        }
        
        //Renvoyer les infos de l'user ainsi ques le titre et l'img des toutes ses notes creer
        response.json({user: user, pubs: user.pubs})
    } catch (error) {
        return response.status(404).json({error: 'Note not found !'})
    }
})


userRouter.post('/', uploadFile.single('avatar'), async (request, response) => {
    const { name, lastName, mail, university, faculty, phone, country, password } = request.body
    let  avatar = request.file ? request.file.path : null // Modification ici : utilisons `let` au lieu de `const`
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)

    try {

        const result = await cloudinary.uploader.upload(avatar);
        avatar = result.secure_url // Url de l'Avatar
        
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
    } catch (error) {
        console.error('Erreur lors de l\'upload sur Cloudinary :', error)
        return response.status(500).json({ error: 'Erreur lors de l\'upload sur Cloudinary' });
    }
})


// cloudinary.api.resources(function(error, result) {
//     console.log(result, 'tout va bien =>',  error , 'Erreur')
// })


module.exports = userRouter