import { Request, Response, NextFunction } from "express";

export function validateMediaRequest(req: Request, res: Response, next: NextFunction): void {
  if (req.body.run === true) next();
  res.status(400).send('ivyko klaida');
}