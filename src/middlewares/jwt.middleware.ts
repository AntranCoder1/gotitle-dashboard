import { NextFunction } from "connect";
import { Request, Response } from "express";
import * as jwtUtil from "../utils/jwt.util";

const jwt = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers["x-token"].toString();
    const user = jwtUtil.verify(token);
    if (user) {
      req.body.user = user;
      next();
      return;
    }
  } catch (err) {
    res.status(401);
    res.send("Unauthorized");
  }
}

export default jwt;
