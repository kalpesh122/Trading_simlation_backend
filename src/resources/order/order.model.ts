import { Schema, model } from "mongoose";
import Order from "./order.interface";

const OrderSchema = new Schema(
  {
    orderID: { type: String, required: true },
    symbol: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    timestamp: { type: String, required: true },
    status: ["Cancelled", "Pending", "Placed"],
    orderType: ["Buy", "Sell"],
  },
  { timestamps: true }
);

export default model<Order>("Order", OrderSchema);
