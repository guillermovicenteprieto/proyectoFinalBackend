import { ROLES } from "../models/Role.js";
import {User} from "../models/User.js";

export const checkifUserExist = async (req, res, next) => {
  const user = await User.findOne({ username: req.body.username });
  if (user) return res.status(400).json({ message: "El usuario ya existe" });

  const email = await User.findOne({ email: req.body.email });
  if (email) return res.status(400).json({ message: "El email ya existe" });

  next();
};

export const checkIfRoleExist = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        return res.status(400).json({
          message: `No autorizado. El rol ${req.body.roles[i]} no existe`,
        });
      }
    }
  }
  next();
};
