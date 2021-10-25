import { Router } from 'express';

import client from '../modules/client/routes';
import product from '../modules/product/routes';
import auth from '../modules/authorization/routes';
import authentication from '../middlewares/authentication';

const routes = Router();

routes.use('/generateAuth', auth);
routes.use('/clients', client);
routes.use('/sellers', client);
routes.use('/products', authentication, product);

export default routes;
