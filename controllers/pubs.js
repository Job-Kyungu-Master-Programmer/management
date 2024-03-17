const pubRouter = require('express').Router()
const Pub =  require('../models/Pub')
const uploadFile = require('../utils/multerConfig')
const cloudinary = require('../utils/cloud')



pubRouter.get('/', async (request, response) => {
    const pub = await Pub.find({})
    response.json(pub)
})

pubRouter.delete('/:id', async (request, response) => {
    const pub = await Pub.findByIdAndDelete(request.params.id)
    response.json(pub)
})




pubRouter.post('/', uploadFile.single('img'), async (request, response) => {
    const body = request.body
    let fileImg = null 

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
        minutes: body.minutes
    })

    const savedPub = await pub.save()
    response.json(savedPub)
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

