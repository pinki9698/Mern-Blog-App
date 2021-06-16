const User = require("../models/User");
const bcrypt = require("bcrypt");
const {check,validationResult} = require("express-validator");

exports.register= async (req,res) => {
     

    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(req.body.password, salt);
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        contact_no:req.body.contact_no,
        institute:req.body.institute,
        message:req.body.message,
        password: hashedPass,
      });
  

         const errors = validationResult(req);
         if(!errors.isEmpty()){
           return res.status(422).json({
             error:errors.array()[0].msg
           })
         }

      const user = await newUser.save();
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  exports.login= async (req,res) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      !user && res.status(400).json("Wrong credentials!");
  
      const validated = await bcrypt.compare(req.body.password, user.password);
      !validated && res.status(400).json("Wrong credentials!");
  
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
    }
  }