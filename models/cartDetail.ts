import { Schema, model, Document } from "mongoose";
import { ICart } from "./cart";
import { IProduct } from "./product";

export interface IDetail extends Document {
    price: number;
    amount: number;
    idCart:ICart;
    idProduct: IProduct;
}

// declaro la estructura que va a tener mi esquema/documento/tabla.
const detailSchema = new Schema({
    price: { type: Number, required: true },
    amount: { type: Number, required: true },
    idCart: {
        type: Schema.Types.ObjectId,
        ref: "Cart"
    },
    idProduct: {
        type: Schema.Types.ObjectId,
        ref: "Product"
    }
});

// exporto mi modelo, el cual me permite acceder a los metodos de la bd.
export default model<IDetail>("CatDetail", detailSchema); 
