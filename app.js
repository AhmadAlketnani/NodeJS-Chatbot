const express=require('express')
const routes = require('./routes')
const {createError}=require('http-errors')


const app =express();

process.on('unhandledRejection', (reason)=>{
    process.exit(1);
})

routes(app)
app.use(express.json())

app.use((req,res,next)=>{
    next(createError(404))
})

app.use((error,req,res,next)=>{
    next(createError(404))
})