const Joi = require('joi');
const { User } = require('../Model/User');
const bcrypt = require('bcrypt');
const router = require('express').Router();


router.post('/', async (req, res) => {

    try {
        const{error} = validate(req.body); 
        if(error) return res.status(400).send({message:error.details[0].message});

        const user = await User.findOne({username:req.body.username});
        
        if(!user) return res.status(401).send({message:"Invalid username or password"});

        const validPassword = await bcrypt.compare(req.body.password, user.password);

        if(!validPassword) return res.status(401).send({message:"Invalid username or password"});

        const token = user.generateAuthToken();
        res.status(200).send({data:token, message:"Logged in successfully"});

    } catch (error) {
        res.status(500).send({message:` Internal server error${error}`});
    }
})

const validate = (data) => {
    const schema = Joi.object({
        username: Joi.string().required().label('username'),
        domain: Joi.string().required().label('domain'),
        password: Joi.string().required().label('password'),

    });
    return schema.validate(data);
}

module.exports = router;