const mongoose = require('mongoose')


const UserSchema = mongoose.Schema({
    name: String,
    des: String,
    src: String,
    video: String,
    email: String,
    photo: String,
    time: String
})

module.exports = mongoose.model('Live', UserSchema)
