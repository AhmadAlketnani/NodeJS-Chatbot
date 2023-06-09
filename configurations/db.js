const { MongoClient } = require('mongodb')

const _url = "mongodb+srv://ahmadjamil:Ahmad2003A@cluster0.otr5qne.mongodb.net/restaurent?retryWrites=true&w=majority"


const dbConnection = (collection, cb) => {
    MongoClient.connect(_url)
        .then(async (client) => {
            const db = client.db('restaurent').collection(collection)
            await cb(db)
            client.close();
        }
        ).catch()
}

module.exports = dbConnection;


