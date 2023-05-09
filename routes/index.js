const foodRouter= require('./food')

module.exports= (app) =>{
    // app.get('/getFood',(req, res, next)=>{
    //     res.status(200).json({
    //         status:true,
    //         message: null
    //     })
    // })

    app.use('/food', foodRouter)
}