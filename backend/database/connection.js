import mongoose from "mongoose";

export const connection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "JOB_PORTAL_WITH_AUTOMATION",
    })
    .then(() => {
      console.log("Connected with Database.");
    })    
    .catch((err) => {
      console.log(`some errors occurred while connecting to database:${err}`);
    });
};
