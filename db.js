const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') })

const mongoose=require('mongoose');

const mongoURI ="mongodb+srv://saurabh:shradha08@cluster0.n18ihex.mongodb.net/?retryWrites=true&w=majority";

console.log(mongoURI)
const connectToMongo=()=>{
    mongoose.connect(mongoURI,
        ()=>{
            console.log("Connected  to Mongo successfully  ")
        } 
        )
}
module.exports=connectToMongo;