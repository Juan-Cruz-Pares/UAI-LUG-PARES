const { response, request } = require("express");
import Detail from "../models/cartDetail";
import {IDetail} from "../models/cartDetail";
import { ICart } from "../models/cart";

const calcularMontoTotal = async (cart: ICart)=>{
    const details = await Detail.find({ idCart: cart._id}).exec();
    if(details.length > 0){
        var total: number = 0 ;
        details.forEach((item : IDetail)=>{
            total += (item.price  * item.amount);
        });
        
        cart.totalPrice = total;
        cart.save();
    }

}

export default {
    calcularMontoTotal
};