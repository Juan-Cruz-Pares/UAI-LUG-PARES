import { Schema, model, Document } from "mongoose";
import {IProvider} from './provider';

export interface IProduct extends Document {
  name: String;
  description: String;
  stock: Number;
  price: Number;
  idProvider: IProvider
}

// declaro la estructura que va a tener mi esquema/documento/tabla.
const productSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true},
  stock: { type: Number, required: true},
  price: { type: Number, required: true},
  idProvider: {
    type: Schema.Types.ObjectId,
    ref: "Provider" 
  },
});
 
// exporto mi modelo, el cual me permite acceder a los metodos de la bd.
export default model("Product", productSchema); 
