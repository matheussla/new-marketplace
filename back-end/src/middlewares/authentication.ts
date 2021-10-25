import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import authConfig from '../config/authorization';
import ErrorBuilder from '../errors/errorBuilder';

const verifyToken = (token) => {
  const { jwt } = authConfig;
  const authDecoded = verify(token, jwt.secret);
  return authDecoded;
};

export default function authentication(request: Request, response: Response, next: NextFunction): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new ErrorBuilder('JWT token missing', 404);
  }

  const [, token] = authHeader.split(' ');

  try {
    verifyToken(token);

    return next();
  } catch (error) {
    throw new ErrorBuilder('Invalid JWT token', 401);
  }
}
