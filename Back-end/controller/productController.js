import prodSchema from "../models/productSchema.js";

// * GET PRODUCT LIST
const productsList = (req, res) => {
  prodSchema
    .find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const postReact = (req, res) => {
  prodSchema
    .find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const singleReact = (req, res) => {
  const id = req.params.id;

  prodSchema
    .findById(id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => res.status(404).json({ error: "Product doesn't exist" }));
};

const productBrand = (req, res) => {
  const brand = req.params.brand;

  // Fetch products that match the given brand using the Mongoose model
  prodSchema
    .find({ brand: brand })
    .then((result) => {
      if (result.length === 0) {
        return res.status(404).json({ error: "Product doesn't exist" });
      }
      res.status(200).json(result);
    })
    .catch((err) => res.status(500).json({ error: "Internal Server Error" }));
};

// * GET SINGLE PRODUCT
const productsSingle = (req, res) => {
  const id = req.params.id;

  prodSchema
    .findById(id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => res.status(404).json({ error: "Product doesn't exist" }));
};

// * DELETE PRODUCT
const productsDelete = (req, res) => {
  const id = req.params.id;

  prodSchema
    .findByIdAndDelete(id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => console.log(err));
};

// * UPDATE PRODUCT
const productsUpdate = (req, res) => {
  const id = req.params.id;
  const updatedProducts = req.body;

  prodSchema
    .findByIdAndUpdate(id, updatedProducts, {
      new: true,
    })
    .then((updatedProduct) => {
      if (updatedProduct) {
        res.json({ message: "Product updated successfully" });
      } else {
        res.status(404).json({ error: "Product not found" });
      }
    })
    .catch((err) => res.status(404).json({ error: "Product not found" }));
};

// * ADD PRODUCT
const productsAdded = async (req, res) => {
  try {
    const { productName, price, stock, description, brand } = req.body;

    const product = await prodSchema.create({
      productName,
      price,
      stock,
      description,
      brand,
      image: req.file.path, // Save the file path in the "image" field of the product schema
    });

    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default {
  productsList,
  productsSingle,
  productsDelete,
  productsUpdate,
  productsAdded,
  postReact,
  singleReact,
  productBrand,
};
