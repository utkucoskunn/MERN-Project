const mongoose = require('mongoose');

const baglan = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
        console.log(`Mongo DB bağlandı --> ${conn.connection.name}`.blue.inverse);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = {
    baglan,
}