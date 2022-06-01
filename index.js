const connectToMongo=require('./db');
var cors = require('cors');
const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, './.env') })
const express = require('express')


connectToMongo()

const app = express()
const port =  process.env.PORT || 5000;

app.use(express.json());
app.use(express.static(__dirname+'/client/build'))
app.use(cors())
app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));
app.get('/', function(req, res) {
  

  res.sendFile(path.join(__dirname + '/client/build/index.html'));
  
 
});
// if(process.env.NODE_ENV==="production")
// {
//   console.log(__dirname);
//   app.use(express.static('./client/build'))
 
// }
app.listen(port, () => {
  console.log(`Example app listening at port http://localhost:${port}`)
})