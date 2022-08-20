const mongoose = require('mongoose');
const dotenv = require("dotenv")
dotenv.config({ path: "/Users/meezan.shaikh/Desktop/personal/MERN/.env"})
const connectDB = async () => {
    try {
        console.log("ENV op: "+process.env.PORT)
        const conn = await mongoose.connect(process.env.MONGO_URI)

        console.log(`Mongo Db Connected : ${conn.connection.host}`.cyan.underline)

    }
    catch(error) {
        console.log(error);
        process.exit(1);
    }
}
module.exports = connectDB
