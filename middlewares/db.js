import mongoose from 'mongoose'

const connectDB = async () => {
  const MONGO_URI = process.env.MONGO_URI
  try {
    mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }).then(() => console.log('MongoDB Connected...'))
  } catch (err) {
    console.log(err)
  }
}
export default connectDB
