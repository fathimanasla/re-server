

const users=require('../Models/userSchema')

const bcrypt=require("bcrypt")

const jwt=require("jsonwebtoken")

exports.Register = async (req, res) => {

    console.log("Inside registration function")

    const { username, password, email } = req.body
    console.log(`Username:${username},Password:${password},Email:${email}`)

    try {
        const existingUser = await users.findOne({ email })
        console.log(existingUser)
        if (existingUser) {
            res.status(406).json("Existing user!! please try again")
        }
        else {


            const newUser = new users({ username, password, email,profileimg:"" })
            await newUser.save()
            res.status(200).json(newUser)

        }
    }
    catch (err) {
        res.status(401).json("somthing went wrong," + err)
    }

}