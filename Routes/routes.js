const express = require('express')



// import controller function to resolve request
const usercontroller = require('../Controller/userController')

// create object for router class in express
const router = new express.Router()

// define various path
router.post('/user/register',usercontroller.Register)

module.exports=router
