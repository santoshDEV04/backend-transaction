import mogoose from 'mongoose'

const connectDB = async () => {
    try {
        const connInstance = await mogoose.connect(`${process.env.MONGO_URI}`)
        console.log(`\n MongoDB connected !! DB host : ${connInstance.connection.host}`)
    } catch (error) {
        console.log("MONGODB connection error: ", error)
        process.exit(1)
    }
}

export default connectDB;