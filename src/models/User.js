import { Schema, model } from "mongoose";

const userSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	apellidos: {
		type: String,
		required: true
	},
	edad: {
		type: Number,
		required: true
	}
});

export default model('User', userSchema);