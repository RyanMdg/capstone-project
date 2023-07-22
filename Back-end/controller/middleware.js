import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

const isLoggedIn = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Invalid authorization header" });
    }

    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.SECRET, (err, payload) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
          return res.status(401).json({ error: "Expired token" });
        }
        return res.status(401).json({ error: "Invalid token" });
      }

      req.user = payload;
      next();
    });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

export default isLoggedIn;
