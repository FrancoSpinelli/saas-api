import cookieParser from "cookie-parser";
import "dotenv/config";
import express from "express";
import createError from "http-errors";
import logger from "morgan";
import path from "path";

import indexRouter from "./routes/index";
import usersRouter from "./routes/users.route";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.use(function (_, __, next) {
  next(createError(404));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
