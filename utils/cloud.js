require('dotenv').config()
const cloudinary = require('cloudinary').v2

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.KEY_API,
    api_secret: process.env.SECRET_API
})

module.exports = cloudinary