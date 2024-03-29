const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs')
const config = require('config');
const jwt = require('jsonwebtoken');
const User = require("../../models/User");

router.post("/", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ msg: "Please Enter all field" });
    }
    const user = await User.findOne({email:email})
    if(user){
      return res.status(400).json({ msg: 'User already exist'})
    }
    bcrypt.genSalt(10,(err,salt)=>{
      bcrypt.hash(password , salt , async (err,hash) =>{
        if(err) throw err;
        const newUser = {name:name,email:email,password:hash};
        const user = await User.create(newUser);

        jwt.sign(
          {id : user.id},
          config.get('jwtSecret'),
          {expiresIn:3600},
          (err,token) =>{
            if(err) throw err
            res.json({token:token,user:user.name,id:user.id,email:user.email});
          }
        )
        
      })
    })
  } catch (err) {console.log(err)}
});

module.exports = router;
