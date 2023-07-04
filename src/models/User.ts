import { Schema, model } from "mongoose";

const userSchema = new Schema({
    googleID: {
        type: String,
        required: true,
    },
displayName: {
        type: String,
        required: true,
    },
firstName: {
        type: String,
        required: true,
    },
lastName: {
        type: String,
        required: true,
    },
        image: {
        type: String,
    },
        createdAt: {
            type: Date,
            default:Date.now
    },
});

const User = model('User', userSchema);

export default User;