const User = require('../modals/user');

exports.createUser = async(req, res)=>{
    const {name, email, password} = req.body
    try{
        const newUser = new User({name, email, password})
        await newUser.save();
        res.status(201).json(newUser)
    }catch(error){
        res.status(500).json({"error":error.message})
    }
};

exports.getUsers = async(req, res)=>{
    try{
        const users= await User.find()
        res.status(200).json(users)
    }catch(error){
        res.status(500).json({"error":error.message})
    }
};