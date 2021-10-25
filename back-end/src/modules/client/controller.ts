import { Request, Response } from 'express';

import ClientsService from './service';

export default class ClientsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { body } = request;

    const clientsService = new ClientsService();

    const result = await clientsService.create(body);

    return response.status(201).json(result);
  }

  public async getAll(request: Request, response: Response): Promise<Response> {
    const clientsService = new ClientsService();

    const result = await clientsService.getAll();

    return response.json(result);
  }

  public async getById(request: Request, response: Response): Promise<Response> {
    const clientsService = new ClientsService();
    const { id } = request.params;

    const result = await clientsService.getById(id);

    return response.json(result);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const clientsService = new ClientsService();
    const { body } = request;
    const { id } = request.params;

    const result = await clientsService.update(id, body);

    return response.json(result);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const clientsService = new ClientsService();
    const { id } = request.params;

    const result = await clientsService.delete(id);

    return response.json(result);
  }
}
