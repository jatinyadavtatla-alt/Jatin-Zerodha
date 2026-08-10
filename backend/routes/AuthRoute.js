const {Signup,Login,Logout}=require("../controllers/AuthController");
const router=require("express").Router();
const { userVerification } = require("../Middlewares/AuthMiddleware");
router.post("/login",Login);
router.post("/Signup",Signup);
// router.post('/',userVerification)

router.post("/logout", Logout);
router.get("/verify", userVerification);
module.exports=router; 
