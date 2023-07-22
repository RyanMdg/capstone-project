import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import { log } from "mercedlogger";
import User from "./router/user.js";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import Products from "./router/products.js";
dotenv.config();

const app = express();

// * FOR UPLOADONG IMAGE
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use("/upload", express.static(path.join(__dirname, "upload")));

// *MIDDLERWARE
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// * TEST SERVER
app.get("/", (req, res) => {
  res.send("server is working ");
});

// * ROUTER USER
app.use("/user", User);

// * ROUTER RESTFUL PROCUCTS
app.use("/products", Products);

// * DATABASE CONNECTION
mongoose
  .connect(process.env.MONGO_URI)
  .then((result) =>
    app.listen(process.env.PORT, () =>
      log.green("SERVER STATUS", `Listening on port ${process.env.PORT}`)
    )
  );

mongoose.connection
  .on("open", () => log.green("DATABASE STATE", "CONNECTION OPEN"))
  .on("close", () => log.magenta("DATABASE STATE", "CONNECTION OPEN"))
  .on("error", (error) => log.red("DATABASE STATE", error));

export default app;
