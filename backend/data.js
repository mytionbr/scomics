import bcrypt from 'bcryptjs'

const data ={
    users:[
        {
        name:"Jose",
        email:"admin@gmail.com",
        password: bcrypt.hashSync('1234',8),
        isAdmin:true
    },
    {
        name:"Lucas",
        email:"lucas@gmail.com",
        password: bcrypt.hashSync('1234',8),
        isAdmin:false
    },

],
    products:[
        {
            
            name:"Rebirth",
            category:'HQ',
            image:'https://images-na.ssl-images-amazon.com/images/I/61VMfkQwoIL._SX340_BO1,204,203,200_.jpg',
            price:29,
            brand:'DC comics',
            rating: 4.5,
            numReviews:10,
            countInStock:4,
            description:'A dc decidiu inventar mais um restart sem sentido, pelo menos tem o batman'
        },
        {
            
            name:"Rebirth1",
            category:'HQ',
            image:'https://images-na.ssl-images-amazon.com/images/I/61VMfkQwoIL._SX340_BO1,204,203,200_.jpg',
            price:29,
            brand:'DC comics',
            rating: 4.5,
            numReviews:10,
            countInStock:0,
            description:'A dc decidiu inventar mais um restart sem sentido, pelo menos tem o batman'
        },
        {
            
            name:"Rebirth2",
            category:'HQ',
            image:'https://images-na.ssl-images-amazon.com/images/I/61VMfkQwoIL._SX340_BO1,204,203,200_.jpg',
            price:29,
            brand:'DC comics',
            rating: 4.5,
            numReviews:10,
            countInStock:20,
            description:'A dc decidiu inventar mais um restart sem sentido, pelo menos tem o batman'
        },
        {
            
            name:"Rebirth3",
            category:'HQ',
            image:'https://images-na.ssl-images-amazon.com/images/I/61VMfkQwoIL._SX340_BO1,204,203,200_.jpg',
            price:29,
            brand:'DC comics',
            rating: 4.5,
            numReviews:10,
            countInStock:49,
            description:'A dc decidiu inventar mais um restart sem sentido, pelo menos tem o batman'
        },
        {
            
            name:"Rebirth4",
            category:'HQ',
            image:'https://images-na.ssl-images-amazon.com/images/I/61VMfkQwoIL._SX340_BO1,204,203,200_.jpg',
            price:29,
            brand:'DC comics',
            rating: 4.5,
            numReviews:10,
            countInStock:1,
            description:'A dc decidiu inventar mais um restart sem sentido, pelo menos tem o batman'
        },
    ]
}

export default data