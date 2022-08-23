const mongoose=require('mongoose');



const connection_db = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
        console.log(`DB Connection Successfully!`.blue.inverse);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports={
    connection_db,
};