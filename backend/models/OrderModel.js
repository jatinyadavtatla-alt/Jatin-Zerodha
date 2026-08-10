
const mongoose=require("mongoose");
const {OrderSchema}=require("../schema/OrderSchema")

const OrderModel=mongoose.model("Orders",OrderSchema);


module.exports={OrderModel};

