import express from 'express';

const router = express.Router();

// to link controllers in router file
import * as categoryController from '../controller/category.controller.js';


router.post("/save",categoryController.save);
router.get("/fetch",categoryController.fetch);
router.patch("/update",categoryController.update); 
router.delete("/delete",categoryController.deletecategory);


export default router;  