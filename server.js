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
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server has Start at port ${5000}`));
