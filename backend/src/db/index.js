import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}`);
    console.log("MONGODB connected !! DB HOST");
  } catch (error) {
    console.log("MONGODB connection ERROR", error);
  }
};
export default connectDB;
