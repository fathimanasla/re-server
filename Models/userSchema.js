const mongoose=require('mongoose')

const validators = require('validator')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true,
        min:6
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validators.isEmail,'Invalid Email']

    },
    profileimg: {
        type: String,
        // default:""
    }
})



const users = mongoose.model('users', userSchema)

module.exports = users