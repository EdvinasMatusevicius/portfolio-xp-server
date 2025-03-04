import { Request, Response, NextFunction } from 'express';

interface FeedbackRequest {
  email: string;
  subject: string;
  feedback: string;
}

const maxInputLengths = {
  email: 50,
  subject: 150,
  feedback: 600
};

export const validateFeedback = (req: Request, res: Response, next: NextFunction) => {
  const { email, subject, feedback } = req.body as FeedbackRequest;
  if (typeof email !== 'string' || typeof subject !== 'string' || typeof feedback !== 'string') {
    res.status(400).json({ error: 'Email, subject, and feedback must be strings.' });
    return;
  }
  if (!email || !subject || !feedback) {
    res.status(400).json({ error: 'Email, subject, and feedback cannot be empty.' });
    return;
  }
  if (email.length > maxInputLengths.email) {
    res.status(400).json({ error: `Email cannot be longer than ${maxInputLengths.email} characters.` });
    return;
  }
  if (subject.length > maxInputLengths.subject) {
    res.status(400).json({ error: `Subject cannot be longer than ${maxInputLengths.subject} characters.` });
    return;
  }
  if (feedback.length > maxInputLengths.feedback) {
    res.status(400).json({ error: `Feedback cannot be longer than ${maxInputLengths.feedback} characters.` });
    return;
  }
  next();
};