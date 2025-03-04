import { Router } from "express";
import { getLithuanianStations } from "../controllers/mediaPlayerController";

export const router = Router();

router.get('/', getLithuanianStations);