import exprss from "express";
import cartController from "../controller/cartController.js";
const router = exprss.Router();

//* GET LIST IN CART
router.get("/cartlist", cartController.cartList);

//* POST NEW PRODUCTS
router.post("/cart", cartController.addToCart);

//* DELETE ITEM IN CART
router.delete("/cartlist/:id", cartController.itemDelete);
router.delete("/remove/:id", cartController.addToCart);
export default router;
