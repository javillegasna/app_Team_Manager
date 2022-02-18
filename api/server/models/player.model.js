const mongoose = require("mongoose");
const PlayerSchema = new mongoose.Schema({
	name: {type:String, minLength:[2,"Name must be at least 2 characters in length"]},
	position: {type:String},
	game1: {type:String, required:[true, "Game1 is required"]},
	game2: {type:String, required:[true, "Game2 is required"]},
	game3: {type:String, required:[true, "Game3 is required"]}
},{timestamps:true});

const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;