import mongoose, { ConnectOptions } from 'mongoose'

const connectMongoDB = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGO_URI as string,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      } as ConnectOptions
    )
    console.log(`MongoDB connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${(error as Error).message}`)
    process.exit(1)
  }
}

export default connectMongoDB
