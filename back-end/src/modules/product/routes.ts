import { Router } from 'express';

import ProductsController from './controller';

const productsRouter = Router();
const productsController = new ProductsController();

productsRouter.post('/', productsController.create);

productsRouter.get('/', productsController.getAll);

productsRouter.put('/:id', productsController.update);

productsRouter.delete('/:id', productsController.delete);

export default productsRouter;
