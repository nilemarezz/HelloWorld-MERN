require('dotenv').config();
const experss = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = experss();
const path = require('path');

// BodyParser MiddleWare
app.use(bodyParser.json());

// DB Connect
mongoose
  .connect(
    process.env.DB_ADDRESS,
    { useNewUrlParser: true }
  )
  .then(() => console.log("DB Connect..."))
  .catch(err => console.log(err));

// Route
const Items = require('./routes/api/Items')
app.use('/api/items',Items);

// Serve saatic assets
if(process.env.NODE_ENV === 'production'){
  // Set folder
  app.use(express.static('client/build'));
  app.get('*', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','index.html'))
  })
}
  
// Listen Port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server has Start at port ${5000}`));
