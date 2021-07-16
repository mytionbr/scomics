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
            
            name:"Redmi Note",
            category:'Celular',
            image:'https://m.media-amazon.com/images/I/51Z3dG7yO4L._AC_SL1000_.jpg',
            price:1000,
            brand:'Xiaomi',
            rating: 4.5,
            numReviews:10,
            countInStock:4,
            description:'Redmi Note 10 64GB 4GB RAM - Green'
        },
        {
            
            name:"Smartphone Poco",
            category:'Shartphone',
            image:'https://m.media-amazon.com/images/I/61P2EO2PbTL._AC_SL1000_.jpg',
            price:900,
            brand:'Xiaomi',
            rating: 4.5,
            numReviews:10,
            countInStock:0,
            description:'Smartphone Poco X3 PRO 256gb 8gb RAM – Phantom Black - Preto'
        },
        {
            
            name:"LG K40S",
            category:'HQ',
            image:'https://m.media-amazon.com/images/I/71AVqGYYr3L._AC_SL1500_.jpg',
            price:989,
            brand:'LG',
            rating: 4.5,
            numReviews:10,
            countInStock:20,
            description:'Smartphone LG K40S - Preto'
        },
        {
            
            name:"Motorola Moto E6s",
            category:'Shartphone',
            image:'https://m.media-amazon.com/images/I/51bIR-1ONdL._AC_SL1000_.jpg',
            price:2009,
            brand:'Motorola',
            rating: 4.5,
            numReviews:10,
            countInStock:49,
            description:'Celular Motorola Moto E6s Cinza Titanium 32gb Tela 6.1" 2gb Ram Câmera Dupla 13mp + 2mp'
        },
        {
            
            name:"SM-T500NZAQZTO",
            category:'TABLET',
            image:'https://m.media-amazon.com/images/I/51IGZZeHqPL._AC_SL1000_.jpg',
            price:1000,
            brand:'SAMSUNG',
            rating: 4.5,
            numReviews:10,
            countInStock:1,
            description:'SM-T500NZAQZTO TABLET SAMSUNG T500 64L GALAXY TAB A7 10.4 WIFI GRAFITE MAN'
        },
    ]
}

export default data