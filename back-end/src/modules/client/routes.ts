import { Router } from 'express';

import ClientsController from './controller';
import FavoritesController from '../favorite/controller';

import authentication from '../../middlewares/authentication';

const clientsRouter = Router();
const clientsController = new ClientsController();
const favoritesController = new FavoritesController();

clientsRouter.post('/', clientsController.create);

clientsRouter.get('/', authentication, clientsController.getAll);

clientsRouter.get('/favoriteProducts/:id', authentication, clientsController.getById);

clientsRouter.put('/:id', authentication, clientsController.update);

clientsRouter.delete('/:id', authentication, clientsController.delete);

clientsRouter.post('/favoriteProduct/add', authentication, favoritesController.create);

clientsRouter.delete('/favoriteProduct/:id', authentication, favoritesController.delete);

export default clientsRouter;
