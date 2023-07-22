import express from "express";
import userContoller from "../controller/usercontroller.js";

const router = express.Router();

// *SIGNUP ROUTE TO CREATE A NEW USER
router.post("/signup", userContoller.sign_up);

// * LOGIN ROUTE TO VERIFY USER AND GET A TOKEN
router.post("/login", userContoller.login);

export default router;
