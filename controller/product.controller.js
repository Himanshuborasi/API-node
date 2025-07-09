import '../model/connection.js';
import productSchemaModel from '../model/product.model.js';
import url from 'url';
import jwt from 'jsonwebtoken';
import re from 'randomstring';


// insert data by post method (insertion)
export const save =async(req,res)=>{
    console.log("heeloloooo",req.body)

  var productList =await productSchemaModel.find();
   //console.log(productList);
     var len=productList.length;
     console.log(len);
     var _id = (len==0)?1 : productList[len-1]._id+1;
     console.log(_id);
     var productDetail = req.body;
     console.log(productDetail);
     productDetail = {...productDetail,"_id":_id,"role":"product","status":0,"info":Date()};
     console.log(productDetail);
    try
    {
     var product = await productSchemaModel.create(productDetail);
     res.status(201).json({"status":true});
    }
    catch(err)
    {
      console.log(err);
      res.status(500).json({"status":false,"error":err});
    }
}



export const fetch = async(req,res)=>{
  var condition_obj = url.parse(req.url,true).query;
  var product = await productSchemaModel.find(condition_obj);
  if(product.length!==0)
  {
    res.status(200).json({"product":category});
  }
  else
  {
    res.status(404).json({"msg":"Responce is not available in database"});
  }
}

export const update = async(req,res)=>{
  var product =  await productSchemaModel.findOne(JSON.parse(req.body.condition_obj));
  // console.log(category);
  if(product)
  {
    var updated_product = await productSchemaModel.updateOne(JSON.parse(req.body.condition_obj),{$set:JSON.parse(req.body.content_obj)});

    if(updated_product){
      res.status(200).json({"msg":"product update successfully"});
      
    }else {
      res.status(500).json({"msg":"resource not update successfully"});
      
    }
  }
 else
 {
  res.status(404).json({"msg":"resource not found in database"})
 } 
} 



// delete data 

export const deleteuser = async (req,res) =>{
  var product = await productSchemaModel.findOne(JSON.parse(req.body.condition_obj));

  if(product)
  {
    var deleted_product = await productSchemaModel.deleteOne(JSON.parse(req.body.condition_obj));
    if(deleted_product) {
      res.status(200).json({"msg":"product deleted successfully"});
    }
    else
    {
           res.status(500).json({"msg":"product not deleted successfully"}); 
    }
  }
  else
  {
          res.status(404).json({"msg":"resource is not found in database"});
  }

  res.send("its working")
};



