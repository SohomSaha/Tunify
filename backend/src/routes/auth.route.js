import { Router } from "express";
import { callback } from "../controller/auth.controller.js";
const app = Router();

app.post("/callback",callback);

export default app;
