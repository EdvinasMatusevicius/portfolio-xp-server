import { Request, Response } from 'express';
import { FeedbackService } from '../services/feedbackService';

export const saveUserFeedback = async (req: Request, res: Response) => {
    try {
        const {email, subject, feedback} = req.body;
        const feedbackService = await FeedbackService.create();
        await feedbackService.createFeedback(email, subject, feedback);
        res.status(200);
    } catch (error) {
        console.error("Error in mediaPlayerController:", error);
        res.status(500).send('Error fetching stations');
    }
};