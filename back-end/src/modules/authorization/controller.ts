import { Request, Response } from 'express';

import AuthorizationService from './service';

export default class AuthorizationController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { body } = request;

    const authorizationService = new AuthorizationService();

    const result = await authorizationService.createAuth(body);

    return response.status(201).json(result);
  }
}
