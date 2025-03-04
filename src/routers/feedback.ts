import { Router } from "express";
import { saveUserFeedback } from "../controllers/feedbackController";
import { validateFeedback } from "../middlewares";

export const router = Router();

router.post('/post', validateFeedback, saveUserFeedback);