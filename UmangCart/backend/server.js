import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/products',(req, res)=>{
    res.send(data.products);
});
app.get('/api/products/slug/:slug',(req, res)=>{
    const product = data.products.find((x)=>x.slug === req.params.slug);
    if(product){
        res.send(product);

    } else{
        res.status(404).send({message:'Product is Unavailabe at UmangCart'});
    }
    // res.send(data.products);
});
app.get('/api/products/:id',(req, res)=>{
    const product = data.products.find((x)=>x._id === req.params.id);
    if(product){
        res.send(product);

    } else{
        res.status(404).send({message:'Product is Unavailabe at UmangCart'});
    }
    // res.send(data.products);
});

const port=process.env.PORT || 5001;
app.listen(port, ()=>{
    console.log(`Server at http://localhost:${port}`);
});


// Server is created, Installed express aswell
// Now, installing nodemon to continue any changes made in the server, we
// just need to write npm start instead of giving file name each time.