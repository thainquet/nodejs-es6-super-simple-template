import mongoose from "mongoose";

const { Schema } = mongoose;

const SymbolSchema = new Schema({
  Id: String,
  Symbol: String,
  Name: String,
});

const Symbol = mongoose.model("Symbol", SymbolSchema);

export { Symbol };
