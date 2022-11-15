import { model, Schema, Document } from 'mongoose';

export interface ICart extends Document {
    date: Date;
    totalPrice: Number;
}

const cartSchema = new Schema({
    date: { type: Date, required: true, unique: true },
    totalPrice: { type: Number, required: true },
});

export default model<ICart>("Cart", cartSchema);