import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";


const userSchema = mongoose.Schema({

   _id:Number,
   
   name:{
    type:String,
    require:[true,'name is required'],
    trim:true,
    lowercase:true
    
   },
    email:{
    type:String,
    require:[true,'name is required'],
    unique:true,
    trim:true,
    lowercase:true
    
   },
    password:{
    type:String,
    require:[true,'passwordf is required'],
    trim:true,
    minlength:5,
    maxlength:10
    
   },
    address:{
    type:String,
    require:[true,'address is required'],
    
    trim:true,
    lowercase:true
   },
    mobile:{
    type:String,
    require:[true,'mobile is required'],
    trim:true,
    lowercase:true
    
   },
    city:{
    type:String,
    require:[true,'city is required'],
    trim:true,
   
    
   },
    gender:{
    type:String,
    require:[true,'gender is required'],
    
    
   },
   role:String,
   status:Number,
   info:String
})

mongoose.plugin(mongooseUniqueValidator);

const userSchemaModel = mongoose.model('user_collection',userSchema);

export default userSchemaModel;