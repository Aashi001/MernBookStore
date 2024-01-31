import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://aashi22754:aashi001@aashi.ogzs2go.mongodb.net");
    console.log(
      `Conneted To Mongodb Databse ${conn.connection.host}`
    );
  } catch (error) {
    console.log(`Error in Mongodb ${error}`);
  }
};

export default connectDB;
