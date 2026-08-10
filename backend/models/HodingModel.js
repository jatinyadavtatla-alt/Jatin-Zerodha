const mongoose = require("mongoose");
const { HoldingSchema } = require("../schema/holdingSchema");

const HoldingModel = mongoose.model("holdings", HoldingSchema);

module.exports = { HoldingModel };