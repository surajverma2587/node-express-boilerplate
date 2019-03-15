import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import bunyan from 'bunyan';

import routes from './routes';
import { errorHandler } from './util/middleware';

const log = bunyan.createLogger({
  name: 'swd-server',
  streams: [
    {
      level: 'info',
      path: 'logs/info.log',
    },
    {
      level: 'error',
      path: 'logs/error.log',
    },
  ],
});

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routes);
app.use((err, req, res, next) => {
  log.error(err);
  errorHandler(res, err.statusCode, err.messageTitle, err.message);
});

app.get('/', (_, res) => res.send('Server is running...'));

export default app;
