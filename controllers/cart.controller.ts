const { response, request } = require("express");
import Detail from "../models/cartDetail";
import Cart from "../models/cart";

const calcularMontoTotal = async (idCart: Number)=>{
    const details = await Detail.find({ idCart: idCart}).exec();
    if(details.length > 0){
        var total = 0;
        details.forEach((item)=>{
            total += (item.price  * item.amount);
        });
        const cart = await Cart.findOne();
        cart.totalPrice = total;
        cart.save();
    }
    
}

export default {
    calcularMontoTotal
};