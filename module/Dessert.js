const { dbConnection } = require('../configurations')

class Dessert {

     getDessert (req , res , next )  {
        dbConnection('dessert', async (collection) => {
           const dessert =  await collection.find({}).toArray();
           res.json(dessert)
        })
    }

}

module.exports= Dessert