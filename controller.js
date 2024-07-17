const Product = require('../models/product');

exports.queryProductsByName = async (req, res) => {
  try {
    const name = req.query.name;
    const products = await Product.find({ name: new RegExp(name, 'i') });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
