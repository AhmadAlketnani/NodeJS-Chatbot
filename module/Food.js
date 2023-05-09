const { dbConnection } = require('../configurations');
const { getFood } = require('../controllers/food');

class Food {
    constructor(){

    }

    getFood() {
        return new Promise((resovle, reject) => {
            try {
                dbConnection('food', async (collection) => {
                    const food = await collection.find().toArray();
                    resovle(food)

                })

            }
            catch (error) {
                reject(error)
            }
        })

    }


   

    // dbConnection('food',async(db)=>{
    //     const food = await db.find().toArray();
    //     console.log(food);
    // })
}


// const food = new Food();

// food.getFood().then(food=>{
//     console.log(food);
// }).catch(error =>{
//     console.log(error);
// } 
// )
module.exports = Food