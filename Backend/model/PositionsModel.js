const {model} = require("mongoose")

const {PostionsSchema} = require("../schemas/PositionsSchema");

const PostionsModel = new model("position", PostionsSchema);

module.exports = {PostionsModel};