const mongoose = require("mongoose")

const connectToDb = async () => {
    //try catch
    mongoose.connect(process.env.MONGO_URL)
    .then( (conn) => {
        console.log(`Connected is DB: ${conn.connection.host}`);
    }) 
    .catch( (err) => {
        console.log(err.messsage);
        process.exit(1)
    })
}


module.exports=connectToDb