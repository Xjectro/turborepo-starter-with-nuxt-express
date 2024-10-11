import "dotenv/config";
import cors from "cors";
import morgan from "morgan";
import * as http from "http";
import Routes from "./routes";
import express from "express";
import dbConnection from "@repo/database";
import rateLimit from "express-rate-limit";

const app = express();
const server = http.createServer(app);

app.use(morgan("dev"));
app.use(cors());

app.use(
  rateLimit({
    max: 10,
    windowMs: 5000,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

new Routes(app);

server.listen(process.env.PORT, () => {
  dbConnection();
  console.info(`Server listening on port ${process.env.PORT}`);
});
