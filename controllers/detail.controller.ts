const { response, request } = require("express");
import Detail from "../models/cartDetail";
import Cart from "../models/cart";
import CartController from "./cart.controller";

const detailPost = async (req = request, res = response) => {
    const listCart = await Cart.find();
    var cart = {_id:0};
    if(listCart.length > 0 ){
        cart = listCart[0];
    }else{
        const c = new Cart({ date : new Date(), totalPrice: 0 });
        await c.save();
        cart = c;
    }
    const detail = await Detail.findOne({ idProduct: req.body.idProduct}).exec();
    
    const { amount, price, idProduct } = req.body;
   
    if (!detail ) {
        const d = new Detail({ price, amount, idCart: cart._id, idProduct });
        if (d) {
            res.json({ msg: `Product ${idProduct} was added` });
            await d.save();
        }
    } else {
        detail.amount += parseInt(amount);
        res.json({ msg: `Product ${idProduct} was added` });
        await detail.save();        
    }
    CartController.calcularMontoTotal(cart._id);
};


const detailDelete = async (req = request, res = response) => {
    const listCart = await Cart.find();
    var cart = {_id:0};
    if(listCart.length > 0 ){
        cart = listCart[0];
    }else{
        const c = new Cart({ date : new Date(), totalPrice: 0 });
        await c.save();
        cart = c;
    }
    
    const detail = await Detail.findOne({ idProduct: req.body.idProduct}).exec();
    
    const { amount, idProduct } = req.body;
   
    if (detail) {
        if ((detail.amount - amount) <= 0) {
            res.status("200").json({ msg: `Product ${idProduct} was eliminated` });
            await detail.delete();
        } else {
            detail.amount -= parseInt(amount);
            res.status("200").json({ msg: `Quantity of product ${idProduct} was eliminated` });
            await detail.save();
            CartController.calcularMontoTotal(cart._id);
        }
    }else{
        res.status("400").json({ msg: `idProduct ` });
    }

};

module.exports = {
    detailPost,
    detailDelete
};