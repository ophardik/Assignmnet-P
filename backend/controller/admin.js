const productModel = require("../model/product");
require('dotenv').config();
const cloudinary = require('cloudinary').v2;
  
const addProduct = async (req, res) => {
  try {
    const { title, description, price, category, is_active, is_deleted } = req.body;
    const file = req.files?.image; // Handling file upload

    // Upload image to Cloudinary if present
    let imageUrl = '';
    if (file) {
      const uploadResult = await cloudinary.uploader.upload(file.tempFilePath, {
        folder: 'products',
      });
      imageUrl = uploadResult.secure_url;
    }

    // Create the product in the database
    await productModel.create({
      title,
      description,
      price,
      url: imageUrl,
      category,
      is_active,
      is_deleted,
    });

    return res.status(200).json({
      success: true,
      message: 'Product created successfully',
      title,
      description,
      price,
      url: imageUrl,
      category,
      is_active,
      is_deleted,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      msg: error.message,
    });
  }
};

const productList = async (req, res) => {
  try {
    const allProducts = await productModel.find({is_active:true});
    return res.status(200).json({ data: allProducts });
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      success: "false",
      message: "Failed to fetch products",
    });
  }
};

module.exports = {
  addProduct,
  productList
};
