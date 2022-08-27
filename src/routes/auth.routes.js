import { Router } from "express";
import * as authController from "../controllers/authController.js";
import {checkifUserExist } from "../middlewares/verifySignup.js"
import {checkIfRoleExist } from "../middlewares/verifySignup.js"
const authRouter = Router();

authRouter.post('/login', authController.login);
authRouter.post('/signup', [checkifUserExist, checkIfRoleExist], authController.signup);

export default authRouter;

/*
routeUser.post(
  "/login",
  passport.authenticate("login", { failureRedirect: "/login-error" }),
  userController.loginPost
);
routeUser.post(
  "/registro",
  upload.single("image"),
  passport.authenticate("signup", { failureRedirect: "/registro-error" }),
  userController.registroPost
);
*/