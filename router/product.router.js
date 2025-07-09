import express from 'express';

const router = express.Router();

// to link controllers in router file
import * as productController from '../controller/product.controller.js';


router.post("/save",productController.save);
router.get("/fetch",productController.fetch);
router.patch("/update",productController.update);
router.post("/delete",productController.deleteuser);

export default router;