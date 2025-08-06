const mongoose = require('mongoose');

async function main(){
    try{

       const con =  await mongoose.connect(process.env.MONGO_URL);
       
        console.log("MongoDb connection successful")
       
    }
    catch(e){
        console.log(`Error occured ${e.message}`);
    }
}

module.exports = main;