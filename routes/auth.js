const router = require("express").Router();
const { register, login } = require("../controllers/auth");
const {check, validationResult}= require("express-validator");


//REGISTER
router.post("/register",
[
  check("username","name should be at least 2 char and no special char").isLength({min:2,max:150}),
  check("email","email is required").isEmail(),
  check("password","password should be atleast 6 char").isLength({min:6}),
  check("message","Only Alphabets are used in Message").isLength({min:3,max:125}),
  check("contact_no","Contact No is Wrong.").isNumeric().isLength({min:10,max:12}),
  check("institute","Institute name should be at least 2 char and no special char").isLength({min:2}),
]
,register
);

//LOGIN
router.post("/login",
[
    check("username","Username is required").isLength({min:3}),
    check("password","password field is required").isLength({min:3})
]
, login);

module.exports = router;
