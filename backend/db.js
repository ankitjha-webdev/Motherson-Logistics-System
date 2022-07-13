const mongoose = require('mongoose');


module.exports=() => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try {
        mongoose.connect(process.env.MONGODB_HOST, connectionParams);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log(error);
        console.log('Error connecting to MongoDB');
    }
};