import CartItem from "../models/cartSchema.js";

// * LIST OF ITEMS IN CART
const cartList = (req, res) => {
  CartItem.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// * REMOVE ITEM IN CART
const removeFromCart = (req, res) => {
  const id = req.params.id;

  CartItem.findByIdAndDelete(id)
    .then((result) => {
      if (result) {
        // Item successfully removed from the cart
        res.json({ message: "Item removed from the cart." });
      } else {
        res.status(404).json({ error: "Item not found in the cart." });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to remove item from the cart." });
    });
};

// * ADDED TO ITEM TO CART
const addToCart = async (req, res) => {
  try {
    const { productId, quantity, productName, brand, price, image } = req.body;

    // Check if all required fields are present
    if (!productId || !quantity || !productName || !brand || !price || !image) {
      return res.status(400).json({ error: "Required fields are missing." });
    }

    const newCartItem = new CartItem({
      productId,
      quantity,
      productName,
      brand,
      price,
      image,
    });

    const savedCartItem = await newCartItem.save();

    res.status(201).json(savedCartItem);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to add the product to the cart." });
  }
};

// * DELETE PRODUCT
const itemDelete = (req, res) => {
  const id = req.params.id;

  CartItem.findByIdAndDelete(id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => console.log(err));
};

export default {
  addToCart,
  cartList,
  itemDelete,
  removeFromCart,
};
