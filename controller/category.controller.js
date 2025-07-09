import '../model/connection.js';
import categorySchemaModel from '../model/category.model.js';
import url from 'url';



// insert data by post method (insertion)
export const save =async(req,res)=>{
  var categoryList =await categorySchemaModel.find();
   //console.log(categoryList);
     var len=categoryList.length;
    // console.log(len);
     var _id = (len==0)?1 : categoryList[len-1]._id+1;
    // console.log(_id);
     var categoryDetail = req.body;
     //console.log(categoryDetail);
     categoryDetail = {...categoryDetail,"_id":_id,"role":"category","status":0,"info":Date()};
     //console.log(categoryDetail);
    try
    {
     var category = await categorySchemaModel.create(categoryDetail);
     res.status(201).json({"status":true});
    }
    catch(err)
    {
      //console.log(err);
      res.status(500).json({"status":false,"error":err});
    }
}

export const fetch = async(req,res)=>{
  var condition_obj = url.parse(req.url,true).query;
  var category = await categorySchemaModel.find(condition_obj);
  if(category.length!==0)
  {
    res.status(200).json({"category":category});
  }
  else
  {
    res.status(404).json({"msg":"Responce is not available in database"});
  }
}

export const update = async(req,res)=>{
  var category =  await categorySchemaModel.findOne(JSON.parse(req.body.condition_obj));
  // console.log(category);
  if(category)
  {
    var updated_category = await categorySchemaModel.updateOne(JSON.parse(req.body.condition_obj),{$set:JSON.parse(req.body.content_obj)});

    if(updated_category){
      res.status(200).json({"msg":"category update successfully"});
      
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

export const deletecategory = async (req, res) => {
  var category = await categorySchemaModel.findOne(JSON.parse(req.body.condition_obj));
  console.log(category)
  if (category) {
    var deleted_category = await categorySchemaModel.deleteOne(JSON.parse(req.body.condition_obj));
    if (deleted_category) {
      res.status(200).json({ msg: "category deleted successfully" });
    }
    else {
      res.status({ "msg": "category not deleted successfully" });
    }
  }
  else {
    res.status(404).json({ "msg": "resource is not found in database" });
  }
}


