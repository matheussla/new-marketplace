import { Router } from 'express';

import AuthorizationController from './controller';

const authorizationRouter = Router();
const authorizationController = new AuthorizationController();

authorizationRouter.post('/', authorizationController.create);

export default authorizationRouter;
