import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";


const productSchema = mongoose.Schema({

   _id:Number,
   
   pname:{
    type:String,
    require:[true,'name is required'],
  
    lowercase:true
    
   },
   piconm:{
    type:String,
    require:[true,'name is required'],
    
    lowercase:true
    
   },
   price:{
    type:String,
    require:[true,'name is required'],
    
    lowercase:true
    
   },
   pquantity:{
    type:String,
    require:[true,'name is required'],
    
    lowercase:true
    
   },
    info:String
   })
   
   mongoose.plugin(mongooseUniqueValidator);
   
   const productSchemaModel = mongoose.model('product_collection',productSchema);
   
   export default productSchemaModel;