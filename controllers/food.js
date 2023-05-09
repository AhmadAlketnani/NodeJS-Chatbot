const { Food } = require('../module');
// const createError = require('http-errors')

const getFood = (req, res, next) => {
    
        // return new Promise((resovle, reject) => {
            // try {
                dbConnection('food', async (collection) => {
                    const food = await collection.find().toArray();
                    res.json(food)

                })

            // }
            // catch (error) {
            //     res.json(error)
            // }
        }
        
        // )

    
    // const food= new Food()
    
    // food.getFood().then(food=>{
    //     // res.json(food)
    //     console.log(food);
    // }).catch(error =>{
    //     // res.json(error)
    //     console.log(error);
    // } 
    // )
// }

module.exports = {
    getFood
}
