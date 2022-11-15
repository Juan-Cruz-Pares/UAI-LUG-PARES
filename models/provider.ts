import { model, Schema, Document } from 'mongoose';

export interface IProvider extends Document {
  name: String;
  email: String;
  phone: String;
}

const providerSchema = new Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
});

export default model<IProvider>("Provider", providerSchema);