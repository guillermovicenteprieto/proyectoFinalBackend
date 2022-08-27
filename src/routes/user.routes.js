import { Router } from "express";
const userRoute = Router();

import userController from "../controllers/userController.js";
import { verifyToken, verifyAdmin } from "../middlewares/authJWT.js";
import { checkIfRoleExist } from "../middlewares/verifySignup.js";

userRoute.post(
  "/",
  [verifyToken, checkIfRoleExist, verifyAdmin],
  userController.createUser
);

userRoute.get("/", userController.getHome);
userRoute.get("/login", userController.login);

userRoute.post("/login", userController.loginPost);

export default userRoute;
