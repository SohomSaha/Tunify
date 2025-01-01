import { Router } from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getAllUsers, getMessages } from "../controller/user.controller.js";

const app = new Router();

app.get('/',protectRoute,getAllUsers);
app.get('/messages/:userId',protectRoute,getMessages);

export default app;