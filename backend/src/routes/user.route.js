import { Router } from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getAllUsers } from "../controller/user.controller.js";

const app = new Router();

app.get('/',protectRoute,getAllUsers);

export default app;