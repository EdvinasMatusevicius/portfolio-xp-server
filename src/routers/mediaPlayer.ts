import { Request, Response, Router } from "express";
import { logger, validateMediaRequest } from "../middlewares";

export const router = Router();

router.get('/', (req: Request, res: Response) => {
  throw new Error('THIS IS ERROR FOR TEST');
  res.send(
    {
      message: 'ALOHA HELLO',
      data: [ 1,2,3,4,5,6 ]
    },
  )
  console.log('SENT')
});
router.post('/', validateMediaRequest, (req: Request, res: Response) => {
  res.send(
    {
      message: 'THIS IS POST REQ',
      data: req.body
    },
  )
});