const {mongoose,model} = require("mongoose");

const { PositionsSchema } = require("../schema/PositionsSchema");

const PositionsModel=new model("positions",PositionsSchema);

module.exports={PositionsModel};
