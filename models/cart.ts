const { model, Schema } = require("mongoose");

const cartSchema = new Schema({
    date: { type: Date, required: true, unique: true },
    totalPrice: { type: Number, required: true },
});

export default model("Cart", cartSchema);