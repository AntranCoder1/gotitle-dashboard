import jwt from "jsonwebtoken";
import config from "../config/db.config";

export let sign = (info) => {
  return jwt.sign(info, config.JWT_SECRET, { expiresIn: "7d" });
};

export let verify = (token) => {
  return jwt.verify(token, config.JWT_SECRET);
};
