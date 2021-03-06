import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import productRouter from './routers/productRouter.js'
import userRouter from './routers/userRouter.js'
import orderRouter from './routers/orderRouter.js'
import path from 'path'

dotenv.config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(()=>console.log('mongodb is connected'))
.catch(err =>console.log(err))

app.use('/api/users', userRouter)
app.use('/api/products', productRouter)
app.use('/api/orders',orderRouter)
app.use('/api/config/paypal',(req,res)=>{
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb')
})

app.use((err,req,res,next)=>{
    res.status(500).send({message:err.message})
})

const __dirname = path.resolve()

app.use(express.static(path.join(__dirname, '/client/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/client/build/index.html'))
);

const port = process.env.PORT || 5000

app.listen(port, ()=>{
    console.log(`Server at http://localhost:${5000}`)
})