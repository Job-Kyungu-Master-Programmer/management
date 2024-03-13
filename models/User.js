const mongoose = require('mongoose')
const validation = require('mongoose-unique-validation')


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    university: {
        type: String
    },
    faculty: {
        type: String
    },
    country: {
        type: String
    },
    phone: {
        type: String
    },
    avatar: {
        type: String,
    }
})

userSchema.plugin(validation)


userSchema.set('toJSON', {
    transform: (document, returned) => {
        returned.id = returned._id.toString()
        delete returned._id
        delete returned.__v
        delete returned.passwordHash
    }
})


const User = mongoose.model('User', userSchema)


module.exports = User