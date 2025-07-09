
import express from 'express';
import bodyParser from 'body-parser';

import userRouter from  './router/user.router.js'
import categoryRouter from './router/category.router.js';
import productRouter from './router/product.router.js';
// to link router level middile ware

const app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended":true}));


//application level middleware
app.use("/user",userRouter);
app.use("/category",categoryRouter);
app.use("/product",productRouter);

app.listen(3001);
console.log("server listen at link :http://localhost:3001");




