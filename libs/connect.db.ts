import mongoose from "mongoose";

// Configures mongoose to omit unknown fields in queries.
// See https://mongoosejs.com/docs/guide.html#strictQuery for more information
mongoose.set("strictQuery", true);

const { MONGO_URI = "" } = process.env;

let isConnected = false;
let isConnecting = false;

export const connectToDB = async (): Promise<void> => {
  if (isConnecting) {
    return;
  } else if (isConnected) {
    return;
  }

  isConnecting = true;

  try {
    await mongoose.connect(MONGO_URI ?? "");
    isConnected = true;
  } catch (err: any) {
    console.log(err);
  }

  isConnecting = false;
};
