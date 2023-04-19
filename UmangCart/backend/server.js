import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';

dotenv.config();   //to fetch variables in dotenv file

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();
app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);

// app.get('/api/products',(req, res)=>{
//     res.send(data.products);
// });
const port=process.env.PORT || 5001;
app.listen(port, ()=>{
    console.log(`Server at http://localhost:${port}`);
});


// Server is created, Installed express aswell
// Now, installing nodemon to continue any changes made in the server, we
// just need to write npm start instead of giving file name each time.