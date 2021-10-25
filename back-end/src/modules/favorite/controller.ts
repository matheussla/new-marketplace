import { Request, Response } from 'express';

import FavoriteService from './service';

export default class FavoriteController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { body } = request;

    const favoriteService = new FavoriteService();

    const result = await favoriteService.create(body);

    return response.status(201).json(result);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const favoriteService = new FavoriteService();
    const { id } = request.params;

    const result = await favoriteService.delete(id);

    return response.json(result);
  }
}
