import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema({
  invoiceNo: Number,
  customer: Object,
  items: Array,
  status: { type: String, default: "Draft" }, // Draft | Sent | Paid | Unpaid
  total: Number,
  vat: Number,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Invoice", invoiceSchema);
