import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import httpContext from "express-http-context";
import helmet from "helmet";
import mongoose from "mongoose";
import pino from "pino";
import { openAPIRouter } from "~/api-docs/openApiRouter";
import errorHandler from "~/middlewares/errorHandler";
import requestLogger from "~/middlewares/requestLogger";
import auth from "~/routes/auth";
import channel from "~/routes/channel";
import contacts from "~/routes/contact";
import { healthCheckRouter as healthCheck } from "~/routes/healthCheck";
import messages from "~/routes/messages";
import setupSocket from "~/socket";

dotenv.config();

const app = express();
const port = process.env.PORT;
const databaseURL = process.env.DATABASE_URL;

app.use(
  cors({
    origin: [process.env.ORIGIN as string],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  }),
);

app.use("/uploads/profiles", express.static("uploads/profiles"));
app.use("/uploads/files", express.static("uploads/files"));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(httpContext.middleware);

app.use("/api/auth", auth);
app.use("/api/contacts", contacts);
app.use("/api/messages", messages);
app.use("/api/channel", channel);
app.use("/api/health-check", healthCheck);

app.use(errorHandler());
app.use(openAPIRouter);
app.use(requestLogger);

const server = app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

setupSocket(server);

mongoose
  .connect(databaseURL as string)
  .then(() => {
    console.log("DB Connection Successful");
  })
  .catch((err) => {
    console.log(err.message);
  });

const logger = pino({ name: "server start" });

const onCloseSignal = () => {
  logger.info("sigint received, shutting down");
  server.close(() => {
    logger.info("server closed");
    process.exit();
  });
  setTimeout(() => process.exit(1), 10000).unref(); // Force shutdown after 10s
};

process.on("SIGINT", onCloseSignal);
process.on("SIGTERM", onCloseSignal);
