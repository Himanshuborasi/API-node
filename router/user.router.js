import express from 'express';


const router = express.Router();

// to link controllers in router file
import * as userController from '../controller/user.controller.js';


router.post("/save",userController.save);
router.get("/fetch",userController.fetch);
router.patch("/update",userController.update);
router.post("/delete",userController.deleteUser);

export default router;

