import express from 'express';

import route1 from './route1';
import route2 from './route2';

const routes = express.Router();

routes.use('/route1', route1);
routes.use('/route2', route2);

export default routes;
