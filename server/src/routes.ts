import express from 'express';
import knex from './database/connection';

import ItemsController from './contollers/ItemsController';
import PointsController from './contollers/PointsController';

const routes = express.Router();

const itemsController = new ItemsController();
const pointsController = new PointsController();

routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

export default routes;
