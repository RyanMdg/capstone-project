import dotenv from "dotenv";
import User from "../models/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

dotenv.config();

const { SECRET = "secret" } = process.env;

// * SIGNUP NEW USER

const sign_up = async (req, res) => {
  try {
    // * HASH PASSWORD
    req.body.password = await bcrypt.hash(req.body.password, 10);

    // * CREATE A NEW USER
    const user = await User.create(req.body);

    // * SEND NEW USER AS RES
    res.json(user);
  } catch (error) {
    res.status(400).json({ error });
  }
};

// * LOGGING IN USER

const login = async (req, res) => {
  try {
    // * CHECK USER EXISTS
    const user = await User.findOne({ username: req.body.username });
    if (user) {
      const result = await bcrypt.compare(req.body.password, user.password);
      if (result) {
        // * SIGN TOKEN AND SEND IT IN RES
        const token = await jwt.sign({ username: user.username }, SECRET);
        res.json({ token });
      } else {
        res.status(400).json({ erro: "password doesn't match" });
      }
    } else {
      res.status(400).json({ error: "User doesn't exist" });
    }
  } catch (error) {
    res.status(400), json({ error });
  }
};

export default {
  sign_up,
  login,
};
