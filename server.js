
require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const config = require('config')
const app = express();
const path = require("path");

// BodyParser MiddleWare
app.use(express.json());

// DB Connect
mongoose
  .connect(
   config.get('DB_ADDRESS'),
    { useNewUrlParser: true , useCreateIndex:true}
  )
  .then(() => console.log("DB Connect..."))
  .catch(err => console.log(err));

// Route

const Items = require("./routes/api/Items");
const Users = require("./routes/api/User");
const Auth = require("./routes/api/Auth");
app.use("/api/items", Items);
app.use("/api/users", Users);
app.use("/api/auth", Auth);

// Serve saatic assets
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Listen Port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server has Start at port ${5000}`));
