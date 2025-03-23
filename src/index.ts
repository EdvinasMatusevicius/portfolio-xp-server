import express from 'express';
import { mediaPlayer, feedback } from './routers';
import { errorHandler, logger } from './middlewares';
import cors from "cors";
import dotenv from 'dotenv';
import path from 'path';

// dotenv.config({path: path.resolve(__dirname, '../../../.env')});
if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: path.resolve(__dirname, '../../../.env') });
}

const app = express();
const port = process.env.SERVER_SERVICE_PORT;
app.use(cors());
app.use(express.json());
app.use(logger);
app.use('/mediaPlayer', mediaPlayer);
app.use('/feedback', feedback);

app.use(errorHandler);
app.listen(port, () => {
  console.log('app running on port:' + port + ':)')
});