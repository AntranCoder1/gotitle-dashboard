import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import session from "express-session";
import { createServer } from "http";
import passport from "passport";
import path from "path";
import config from "./config/db.config";
const port = config.PORT;
import sequelize from "sequelize";
const env = process.env.NODE_ENV || "development";

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

const app = express();

import userRoutes from "./routes/user-list.routes";

const httpServer = createServer(app);
// const socketio = new Server(httpServer, {
//   cors: {
//     origin: "*",
//   },
// });
// app.set("skio", socketio); // :) just call const socketio = req.app.get("skio") to re-use it in controller

app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");

  next();
});
app.use(cookieParser());
app.use(passport.initialize());
app.use(
  session({
    secret: "keyboard cat",
    key: "sid",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors({ credentials: true, origin: "*" }));

// sequelize
//   .sync()
//   .then((ok) => {
//     console.log("Nice! Database looks fine");
//   })
//   .catch((err) => {
//     console.log(err, "Something went wrong with the Database Update!");
//   });

app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to abc" });
});

// app.get("/*", (req, res) => res.sendFile(path.resolve("./fe/index.html")));

httpServer.listen(port, () => {
  console.log(`App is running on port ${port}!`);
});

// modules
console.log(`Running modules`);
