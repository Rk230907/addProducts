import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://iyashpatelp:ISe8Zmg9aEf6AuFP@cluster0.ykr7z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log(`Mongo db is connected successfully : ${conn.connection.host}`);
  } catch (e) {
    console.error(`Error : ${e}`);
    process.exit(1);
  }
};

export default connectDB;
