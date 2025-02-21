import { Request, Response, NextFunction } from "express";

export function validateMediaRequest(req: Request, res: Response, next: NextFunction): void {
  // const stationId
  next(); //TO DO: delete if not needed
}