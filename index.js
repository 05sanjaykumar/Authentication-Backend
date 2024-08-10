const express = require('express')

const app = express();
const cors = require('cors')
require('dotenv').config();
require('./Models/db')

const AuthRouter = require('./Routes/AuthRouter')
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors())

app.use('/auth',AuthRouter)

app.get('/ping',(req,res)=>{
    res.send("Hello")
})

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})