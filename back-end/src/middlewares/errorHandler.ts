import { Request, Response, NextFunction } from 'express';
import ErrorBuilder from '../errors/errorBuilder';

// eslint-disable-next-line no-unused-vars
export default function errorHandler(error: Error, request: Request, response: Response, next: NextFunction): Response {
  if (error instanceof ErrorBuilder) {
    return response.status(error.statusCode).json({
      status: 'Aplication Error',
      message: error.message,
    });
  }

  return response.status(500).json({
    status: 'Aplication Error',
    message: error.message || 'Internal Server Error',
  });
}
