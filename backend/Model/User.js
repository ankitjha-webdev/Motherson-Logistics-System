const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const joi = require("joi")
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({

    username:{type:String, required:true},
    domain:{type:String, required:false},
    email:{type:String, required:true},
    password:{type:String, required:true},

}, {timestamps: true});

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id}, process.env.JWT_SECRET,{expiresIn:"7d"})
    return token;
};

const User = mongoose.model("User", userSchema);

const validate = (data) =>{
    const schema = joi.object({
        username: joi.string().required().label("Username"),
        domain: joi.string().required().label("Domain"),
        email: joi.string().required().email().label("Email"),
        password: passwordComplexity().required().label("Password"),
    })
}

module.exports = {User, validate};