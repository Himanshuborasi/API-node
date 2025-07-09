import mongoose from "mongoose";

const url = "mongodb://localhost:27017/stackbatch230pm4june";

mongoose.connect(url);


console.log("database connected successfully");

