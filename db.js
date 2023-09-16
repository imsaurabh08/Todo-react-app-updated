const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') })

const mongoose=require('mongoose');

const mongoURI ="mongodb+srv://srbhmodanwal:Saurabh08@cluster0.hnvi89z.mongodb.net/";

console.log(mongoURI)
const connectToMongo=()=>{
    mongoose.connect(mongoURI,
        ()=>{
            console.log("Connected  to Mongo successfully  ")
        } 
        
        )
}
module.exports=connectToMongo;