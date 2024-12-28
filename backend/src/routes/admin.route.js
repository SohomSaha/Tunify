import { Router } from "express";
import { protectRoute,requireAdmin } from "../middleware/auth.middleware.js";
import { createSong, deleteSong,createAlbum,deleteAlbum,checkAdmin } from "../controller/admin.controller.js";

const app = Router();

app.use(protectRoute,requireAdmin);

app.get("/check",checkAdmin);

app.post("/songs",createSong);
app.delete("/songs/:id",deleteSong);
app.post("/albums",createAlbum);
app.delete("/albums/:id",deleteAlbum);


export default app;