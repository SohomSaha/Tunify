import { Router } from "express";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";
import { getStats } from "../controller/stat.controller.js";

const app = Router();

app.get("/", protectRoute, requireAdmin,getStats);

export default app;