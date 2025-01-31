import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // console.log('check string ', process.env.MONGO)

    mongoose.connect(process.env.MONGO);
    console.log("Mongo Db connected..");
  } catch (error) {
    console.log("DB connection error ", error);
  }
};

export default connectDB;
