const mongoose = require('mongoose')
mongoose.set('strictQuery', false)


const pubSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    img: {
        type: String
    },
    hours: {
        type: String
    },
    minutes: {
        type: String
    }
})


pubSchema.set('toJSON', {
    transform: (document, returned) => {
        returned.id = returned._id.toString()
        delete returned._id
        delete returned.__v
    }
})



module.exports = mongoose.model('Pub', pubSchema)