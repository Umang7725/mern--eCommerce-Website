import bcrypt from 'bcryptjs';

const data={
    users: [
        {
          name: 'Umang Raj',
          email: 'umangraj7725@gmail.com',
          password: bcrypt.hashSync('123456'),
          isAdmin: true,
        },
        {
          name: 'Raushan Raj',
          email: 'raushanraj5223@gmail.com',
          password: bcrypt.hashSync('123456'),
          isAdmin: false,
        },
      ],

    products: [
        {   
            // _id:'1',
            name: 'Nike Slim SHirt',
            slug: 'Nike-slim-shirt',
            category: 'Shirts',
            image: '/images/p1.jpg',
            price:1150,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews : 10,
            description: 'high quality product',
        },
        {
            // _id:'2',
            name: 'Addidas Slim SHirt',
            slug: 'Addidas-slim-shirt',
            category: 'Shirts',
            image: '/images/p2.jpg',
            price:780,
            countInStock: 17,
            brand: 'Addidas',
            rating: 4.5,
            numReviews : 10,
            description: 'high quality product',
        },
        {
            // _id:'3',
            name: 'Nike Slim Pant',
            slug: 'Nike-slim-pant',
            category: 'Shirts',
            image: '/images/p3.jpg',
            price:2120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews : 10,
            description: 'high quality product',
        },
        {
            // _id:'4',
            name: 'Puma Slim SHirt',
            slug: 'Puma-slim-shirt',
            category: 'Shirts',
            image: '/images/p4.jpg',
            price:789,
            countInStock: 0,
            brand: 'Puma',
            rating: 4.5,
            numReviews : 10,
            description: 'high quality product',
        },
    ],
};
export default data;
