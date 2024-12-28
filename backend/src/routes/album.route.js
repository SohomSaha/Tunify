import { Router } from "express";
import {getAllAlbums, getAlbumbyId} from "../controller/album.controller.js";
const app = Router();

app.get("/", getAllAlbums);
app.get("/:albumId", getAlbumbyId);

export default app;