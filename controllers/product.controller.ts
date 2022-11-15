const { response, request } = require("express");
import Product from "../models/product";

const productsGet = async (req = request, res = response) => {
    const products = await Product.find();
    if (products.length) {
        res.status("200").json({ products })
    } else {
        res.status("200").json({ msg: "There are no products" });
    }
};

const productsPost = async (req = request, res = response) => {
    const p = await Product.find({ name: req.body.name}).exec();
    const { name, description, stock, price, idProvider } = req.body;
    console.log(p);
    if (!p || p.length === 0) {
        const product = new Product({ name, description, stock, price, idProvider });
        if (product) {
            res.status("200").json({ msg: `Product ${product._id} was added` });
            await product.save();
        }
    } else {
        res.status("200").json({ msg: `Product ${name} existing` });
    }
};

module.exports = {
    productsGet,
    productsPost
};