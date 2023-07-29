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
import productController from "./controller/productController.js";
import Cartitems from "./router/cartitems.js";
import Stripe from "stripe";
dotenv.config();

const app = express();

// *MIDDLERWARE
app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));

// * STRIPE IMPLEMENTATION
const stripe = new Stripe(
  "sk_test_51NQA7hKyAgZmsnmimQnKe8Mc4eTgQRXa5WLQu1Njgbr2CA83u5tUUkYBqS8buYF6VhcQxui4kfqz3PGMtGrdy0IZ00AWb45w4s"
);

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 100400;
};

app.post("/create-payment-intent", async (req, res) => {
  const items = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

// * FOR UPLOADONG IMAGE
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use("/upload", express.static(path.join(__dirname, "upload")));

// * TEST SERVER
app.get("/", (req, res) => {
  res.send("server is working ");
});

// Route for handling successful payment
app.get("/payment-success", (req, res) => {
  res.redirect("http://localhost:3000/paymentsuccess");
});

// * ROUTER USER
app.use("/user", User);

// * ROUTER FOR CART ITEMS
app.use("/products", Cartitems);

// * ROUTER RESTFUL PROCUCTS
app.use("/products", Products);

// * FETCH PRODUCT NO AUTH
app.get("/react", productController.postReact);
app.get("/react/single/:id", productController.singleReact);

//* GET A  PRODUCTS BY BRAND
app.get("/react/productlist/:brand", productController.productBrand);

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
