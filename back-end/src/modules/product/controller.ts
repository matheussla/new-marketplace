import { Request, Response } from 'express';

import ProductsService from './service';

export default class ProductsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { body } = request;

    const productsService = new ProductsService();

    const result = await productsService.create(body);

    return response.status(201).json(result);
  }

  public async getAll(request: Request, response: Response): Promise<Response> {
    const productsService = new ProductsService();

    const result = await productsService.getAll();

    return response.json(result);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const productsService = new ProductsService();
    const { body } = request;
    const { id } = request.params;

    const result = await productsService.update(id, body);

    return response.json(result);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const productsService = new ProductsService();
    const { id } = request.params;

    const result = await productsService.delete(id);

    return response.json(result);
  }
}
