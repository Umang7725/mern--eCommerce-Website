import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/products',(req, res)=>{
    res.send(data.products);
});

const port=process.env.PORT || 5001;
app.listen(port, ()=>{
    console.log(`Server at http://localhost:${port}`);
});


// Server is created, Installed express aswell
// Now, installing nodemon to continue any changes made in the server, we
// just need to write npm start instead of giving file name each time.