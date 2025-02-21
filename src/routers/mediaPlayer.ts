import { Request, Response, Router } from "express";
import { logger, validateMediaRequest } from "../middlewares";
import { RadioBrowserApi, StationSearchType } from 'radio-browser-api'
import { getLithuanianStations } from "../controllers/mediaPlayerController";

export const router = Router();

router.get('/', getLithuanianStations);
router.get('/radio-stations', async (req: Request, res: Response) => {
  try {
    const apiResponse = await fetch('https://de1.api.radio-browser.info/stations/byname/jazz', {
      headers: {
        'Accept': 'application/json'
      }
    });
    if (!apiResponse.ok) {
      throw new Error(`HTTP error! status: ${apiResponse.status}`);
    }
    const stations = await apiResponse.json();
    res.json(stations);

  } catch (error: any) {
    console.error("Error fetching radio stations:", error);
    res.status(500).send('Error fetching radio stations');
  }
});