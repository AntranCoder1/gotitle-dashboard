import express from "express";
import * as userControllers from "../controllers/user-list.controllers";
import jwtMiddleware from "../middlewares/jwt.middleware";
const router = express.Router();

router.get("/", jwtMiddleware, userControllers.getAll);

router.post("/register", userControllers.register);

router.post("/login", userControllers.login);

router.post("/create", userControllers.createAUser);

router.delete("/delete/:id", jwtMiddleware, userControllers.deleteUser);

router.post("/update/:id", jwtMiddleware, userControllers.updateUser);

router.get("/getOne/:id", jwtMiddleware, userControllers.getUserWithId);

router.get("/getTitle", jwtMiddleware, userControllers.getTitles);

router.get("/getError", jwtMiddleware, userControllers.getErrors);

router.post("/createTitle", jwtMiddleware, userControllers.createTitle);

export default router;
