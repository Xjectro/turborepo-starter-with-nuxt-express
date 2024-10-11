import mongoose from "mongoose";

export default async () => {
  await mongoose.connect(process.env.MONGOOSE_URI as string, {
    retryWrites: true,
  });

  console.log("Connected to database");
};

mongoose.set("strictQuery", false);

export * from "./models/tfa.model";
export * from "./models/user.model";
export * from "./models/auth.model";
export * from "./models/connection.model";
