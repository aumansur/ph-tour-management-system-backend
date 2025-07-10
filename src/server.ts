/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import { Server } from "http";

import mongoose from "mongoose";
import app from "./app";

import { envVars } from "./app/config/env";
const port = envVars.PORT;

let server: Server;

const statServer = async () => {
  try {
    await mongoose.connect(envVars.DB_URL as string);
    console.log("connection to BD via mongoose!!");
    server = app.listen(port, () => {
      console.log(`sever is listening on to port on ${envVars.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

statServer();
// process.on("unhandledRejection", () => {
//   console.log("unhandled Rejection detected .... server shutting down");
//   if (server) {
//     server.close(() => {
//       process.exit(1);
//     });
//   }
//   process.exit(1);
// });

// Promise.reject(new Error("I forget to catch this promise"));

/**
 * unhandled rejection error  try catch
 * uncaught rejection error
 * signal termination sigterm
 *
 */
