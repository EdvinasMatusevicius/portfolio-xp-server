import { Request, Response } from 'express';
import { fetchLithuanianRadioStations } from '../services/mediaPlayerService';

export const getLithuanianStations = async (req: Request, res: Response) => {
    try {
        const stations = await fetchLithuanianRadioStations(10);
        res.json(stations);
    } catch (error) {
        console.error("Error in mediaPlayerController:", error);
        res.status(500).send('Error fetching stations');
    }
};