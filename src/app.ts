import express from "express";
import bodyParser from "body-parser";
import http from "http";

import router from "./route";
import { errorHandler } from "./middleware/error";

// Init express
const app = express();
const server = http.createServer(app);

// Add middlewares
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use("/api/v1/", router);

// Add error handler
app.use(errorHandler);

// === run app == //
app.listen(8000, () => console.log(`Example app running!`));
