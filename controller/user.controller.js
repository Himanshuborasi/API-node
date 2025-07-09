import '../model/connection.js';
import userSchemaModel from '../model/user.model.js';
import url from 'url';



// insert data by post method (insertion)
export const save = async (req, res) => {
  var userList = await userSchemaModel.find();
  //console.log(userList);
  var len = userList.length;
  //console.log(len);
  var _id = (len == 0) ? 1 : userList[len - 1]._id + 1;
  //console.log(_id);
  var userDetail = req.body;
  //console.log(userDetail);
  userDetail = { ...userDetail, "_id": _id, "role": "user", "status": 0, "info": Date() };
  //console.log(userDetail);
  try {
    var user = await userSchemaModel.create(userDetail);
    res.status(201).json({ "status": true });
  }
  catch (err) {
    //console.log(err);
    res.status(500).json({ "status": false, "error": err });
  }
}



export const fetch = async (req, res) => {
  var condition_obj = url.parse(req.url, true).query;
  var user = await userSchemaModel.find(condition_obj);
  if (user.length !== 0) {
    res.status(200).json({ "user": user });
  }
  else {
    res.status(404).json({ "msg": "Responce is not available in database" });
  }
}


export const update = async (req, res) => {
  var user = await userSchemaModel.findOne(JSON.parse(req.body.condition_obj));
  // console.log(user);
  if (user) {
    var updated_user = await userSchemaModel.updateOne(JSON.parse(req.body.condition_obj), { $set: JSON.parse(req.body.content_obj) });

    if (updated_user) {
      res.status(200).json({ "msg": "user update successfully" });

    } else {
      res.status(500).json({ "msg": "resource not update successfully" });

    }
  }
  else {
    res.status(404).json({ "msg": "resource not found in database" })
  }
}



// delete data 
export const deleteUser = async (req, res) => {
  var user = await userSchemaModel.findOne(JSON.parse(req.body.condition_obj));
  if (user) {
    var deleted_user = await userSchemaModel.deleteOne(JSON.parse(req.body.condition_obj));
    if (deleted_user) {
      res.status(200).json({ msg: "user deleted successfully" });
    }
    else {
      res.status({ "msg": "user not deleted successfully" });
    }
  }
  else {
    res.status(404).json({ "msg": "resource is not found in database" });
  }
}