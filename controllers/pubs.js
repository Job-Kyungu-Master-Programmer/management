const pubRouter = require('express').Router()
const Pub =  require('../models/Pub')
const uploadFile = require('../utils/multerConfig')
const cloudinary = require('../utils/cloud')
const jwt = require('jsonwebtoken')
const User = require('../models/User')



//Passer le token a la personne connecter et pour creer une pub
const getToken = request => {
    const authorization = request.get('authorization')
    if(authorization && authorization.startsWith('Bearer ')) {
        return authorization.replace('Bearer ','')
    }
    return null
}

pubRouter.get('/', async (request, response) => {
    const pubs = await Pub.find({}).populate('user', {name:1, avatar:1});
    response.json(pubs);
});


pubRouter.get('/:id', async (request, response) => {
    try {
        // Ici nous trouvons la publication par son ID et populons les détails de l'utilisateur
        const pub = await Pub.findById(request.params.id).populate('user', {name:1, avatar:1});
        // Nous nous assurons que l'user est valide
        if (!pub.user) {// Et cet user , c juste l'user dans populate
            return response.status(404).json({ error: 'Publication or user not found' });
        }
        // Et nous renvoyons la publication et ainsi que les details de l'user qui l'a creer
        response.json({
            publication: pub,
            user: pub.user
        });
    } catch (err) {
        console.error(err); // Log the error for debugging
        return response.status(500).json({ error: 'An error occurred while fetching the publication' });
    }
});




// Dans cette route si on supprime la pub , celle-ci va directement supprimer l'img dans Cloudinary
pubRouter.delete('/:id', async (request, response) => {
    const pub = await Pub.findByIdAndDelete(request.params.id)
    // Si l'élément a une image, supprimons-la de Cloudinary
    if (pub.img) {
        const publicId = pub.img.split('/').pop().split('.')[0]; // Extraire l'ID public de l'URL
        await cloudinary.uploader.destroy(publicId); // Supprimer l'image de Cloudinary
    }
    response.json(pub)
})




pubRouter.post('/', uploadFile.single('img'), async (request, response) => {
    try {
        const body = request.body
        let fileImg = null 
    
        //Decodeer l'entete si l'user contient le token 
        const decodedToken = jwt.verify(getToken(request), process.env.SECRET_JWT)
        if(!decodedToken.id) {
            return response.status(401).json({error: 'Invalid token'})
        }
    
        const user = await User.findById(decodedToken.id)
    
        if(request.file) {
            try {
                const result = await cloudinary.uploader.upload(request.file.path);
                fileImg = result.secure_url // URL de l'image Cloudinary
            } catch (error) {
                console.error('Erreur lors de l\'upload sur Cloudinary :', error)
                return response.status(500).json({ error: 'Erreur lors de l\'upload sur Cloudinary' });
            }
        }
    
        const pub = new Pub({
            title: body.title,
            content: body.content,
            img: fileImg,
            hours: body.hours,
            minutes: body.minutes,
            user: user.id
        })
    
        const savedPub = await pub.save()
        user.pubs = user.pubs.concat(savedPub._id)
        await user.save()
        response.status(201).json(savedPub)
    } catch (err) {
        return response.status(401).json({error: 'Invalid Token'})
    }
})

// cloudinary.api.resources(function(error, result) {
//     console.log(result, error);
// });



module.exports = pubRouter;




























































// let pubs = [
//     {
//         title: 'pa',
//         content: 'ma',
//         id: 4545154
//     }
// ];

// const generateId = () => {
//     const maxId = pubs.length > 0
//     ? Math.max(...pubs.map(n => n.id))
//     : 0;
//     return maxId + 1;
// };

// pubRouter.post('/', (request, response) => {
//     const body = request.body;
    
//     const pub = {
//         title: body.title,
//         content: body.content,
//         id: generateId()
//     };
    
//     // Update the outer pubs array directly
//     pubs = pubs.concat(pub);
//     response.json(pub);
// });

// pubRouter.get('/', (request, response) => {
//     response.json(pubs);
// });

// pubRouter.get('/:id', (request, response) => {
//     const id = Number(request.params.id)
//     const pub = pubs.find(p => p.id === id)
//     response.json(pub)
// })

// pubRouter.delete('/:id', (request, response) => {
//     const pubId = Number(request.params.id)
//     const pub = pubs.filter(p => p.id !== pubId)
//     response.json(pub)
// })

