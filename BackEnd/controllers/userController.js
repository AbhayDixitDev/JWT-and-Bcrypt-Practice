const User = require("../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


const userRegister=async(req,res)=>{
    console.log(req.body);
    const {name,email,password}=req.body
    let user = await User.findOne({email})
    if(user){
        return res.status(400).send("User already exists")
    }
    
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    user=await User.create({
        name,
        email,
        password:hashedPassword
    })
    res.send("ok")
    
}

const userLogin=async(req,res)=>{
    console.log(req.body);
    
    const {email,password}=req.body
    let user=await User.findOne({email})
    if(!user){
        return res.status(400).send("User not found")
    }
    const isMatch=await bcrypt.compare(password,user.password)
    if(!isMatch){
        return res.status(400).send("Incorrect Password")
    }
    const token = jwt.sign({email:user.email,name:user.name},process.env.JWT_SECRET)
    res.header("auth_token",token)
    res.send({user:user})
}

const userLogout=async(req,res)=>{
    res.header("auth_token","")
    res.send("ok")
}

const userValidate=async (req, res) => {
    console.log(req.headers.auth_token);
    res.send("ok")
   const authToken = req.headers.auth_token;
    if (!authToken) {
        return res.status(401).send({ error: 'No token provided' });
    }
    try {
        const { email } = jwt.verify(authToken, process.env.JWT_SECRET);
        const user = await User.findOne({email});
        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }
        res.send(user);
    } catch (error) {
        res.status(401).send({ error: 'Invalid token' });
    }
} 

module.exports={
    userRegister,
    userLogin,
    userLogout,
    userValidate
}