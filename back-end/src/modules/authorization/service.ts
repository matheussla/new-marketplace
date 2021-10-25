import { getCustomRepository } from 'typeorm';
import { sign } from 'jsonwebtoken';
import ErrorBuilder from '../../errors/errorBuilder';
import authConfig from '../../config/authorization';
import AuthDTO from './interface';
import ClientsRepository from '../client/repository';

const generateToken = (client) => {
  const { jwt } = authConfig;
  const token = sign({}, jwt.secret, {
    subject: client.id,
    expiresIn: jwt.expiresIn,
  });
  return token;
};

export default class AuthorizationService {
  public async createAuth({ name, email }: AuthDTO): Promise<String | {}> {
    const clientsRepository = getCustomRepository(ClientsRepository);

    const client = await clientsRepository.findOne({ where: { name, email } });

    if (!client) {
      throw new ErrorBuilder('Could not find Client', 404);
    }

    const authToken = generateToken(client);

    return { token: authToken };
  }
}
