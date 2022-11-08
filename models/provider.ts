const { model, Schema } = require("mongoose");

const providerSchema = new Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
});

export default model("Provider", providerSchema);