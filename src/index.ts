import express from 'express';
import { mediaPlayer } from './routers';
import { errorHandler, logger } from './middlewares';
const app = express();
const port = 8080;

app.use(express.json());
app.use(logger);
app.use('/mediaPlayer', mediaPlayer)

app.use(errorHandler);
app.listen(port, () => {
  console.log('app running on port:' + port + ':)')
});