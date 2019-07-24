const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");
const auth = require('../../middleware/auth');

router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ msg: "Please Enter all field" });
    }
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ msg: "User does not  exist" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Not Match" });
    }
    jwt.sign(
      { id: user.id },
      config.get("jwtSecret"),
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        res.json({
          token: token,
          user: user.name,
          id: user.id,
          email: user.email
        });
      }
    );
  } catch (err) {
    console.log(err);
  }
});

router.get('/user',auth,async (req,res)=>{
    const user = await User.findById(req.user.id).select('-password');
    res.json(user)

})

module.exports = router;
