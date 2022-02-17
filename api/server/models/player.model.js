const mongoose = require("mongoose");
const PlayerSchema = new mongoose.Schema({
	Name: {type:String, required:[true, "Title is required"], minLength:[3,"Please send more than 3 characters"]},
	Position: {type:String},
	Game1: {type:String, required:[true, "Game1 is required"]},
	Game2: {type:String, required:[true, "Game2 is required"]},
	Game3: {type:String, required:[true, "Game3 is required"]}
},{timestamps:true});

const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;