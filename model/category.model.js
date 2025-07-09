import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";


const categorySchema = mongoose.Schema({

   _id:Number,
   
   catnm:{
    type:String,
    require:[true,'name is required'],
    trim:true,
    lowercase:true
    
   },
   caticonnm:{
    type:String,
    require:[true,'name is required'],
    trim:true,
    lowercase:true
    
   },
    info:String
   })
   
   mongoose.plugin(mongooseUniqueValidator);
   
   const categorySchemaModel = mongoose.model('category_collection',categorySchema);
   
   export default categorySchemaModel;