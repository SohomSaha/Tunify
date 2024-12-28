import { Router } from "express";
import { getAllSongs, getFeaturedSongs, getMadeForYouSongs, getTrendingSongs } from "../controller/song.controller.js";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";

const app = Router();

app.get("/",protectRoute,requireAdmin, getAllSongs);

app.get("/featured", getFeaturedSongs);
app.get("/made-for-you", getMadeForYouSongs);
app.get("/trending", getTrendingSongs);





export default app;