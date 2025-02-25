const { Schema, model, Types } = require("mongoose");

//TODO: replace with datamodel with exam description

const dataSchema = new Schema({
  prop: {
    type: String,
    require: true,
  },
  author: {
    type: Types.ObjectId,
    ref: "User",
  },
});

const Data = model("Data", dataSchema);
module.exports = { Data };
