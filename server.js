require('dotenv').config();
const experss = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = experss();

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
// Listen Port
app.listen(process.env.PORT || 5000, () => console.log("Server has Start"));
