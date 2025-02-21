import { RadioBrowserApi } from 'radio-browser-api';

export const fetchLithuanianRadioStations = async (limit: number) => {
    try {
        const api = new RadioBrowserApi('portfolioXP');
        const stations = await api.searchStations({
            countryCode: 'LT',
            limit: limit,
            offset: 0
        });
        return stations;
    } catch (error) {
        console.error("Error in mediaPlayerService:", error);
        throw error; // Re-throw the error to be handled in the controller
    }
};