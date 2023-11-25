const { Int32 } = require("mongodb");
const mongoose = require("mongoose");

const userDetailsSchema = new mongoose.Schema(
    {
        fname: String,
        lname: String,
        email: {type:String, unique:true},
        password: String,
    },
    {
        collection: "UserInfo"
    }
);

mongoose.model("UserInfo", userDetailsSchema);