import { Schema, model } from "mongoose";

const userSchema = new Schema({
    firstName: String,
    surname: String,
    qualification: String,
    profileImage: String
}, {
    versionKey: false
})

export const User = model("teams",userSchema)