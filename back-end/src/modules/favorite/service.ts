import { getCustomRepository } from 'typeorm';
import Favorite from '../../models/client';
import ErrorBuilder from '../../errors/errorBuilder';
import FavoriteDTO from './interface';
import FavoritesRepository from './repository';
import ClientsRepository from '../client/repository';
import ProductsRepository from '../product/repository';

const verifyProduct = async (client, productId): Promise<void> => {
  const products = [];

  if (client.favoriteProducts) {
    products.push(client.favoriteProducts.find((favorite) => favorite.productId === productId));
  }

  if (products[0]) {
    throw new ErrorBuilder('This Product has already been added to client favorite products list', 400);
  }
};

export default class FavoritesService {
  public async create(data: FavoriteDTO): Promise<Favorite | {}> {
    const favoritesRepository = getCustomRepository(FavoritesRepository);
    const clientsRepository = getCustomRepository(ClientsRepository);
    const productsRepository = getCustomRepository(ProductsRepository);

    const client = await clientsRepository
      .createQueryBuilder('clients')
      .leftJoinAndSelect('clients.favoriteProducts', 'favoriteProducts.clientId')
      .where('clients.id = :id', { id: data.clientId })
      .getOne();
    const product = await productsRepository.findOne({ id: data.productId });

    if (!client) {
      throw new ErrorBuilder('This Client does not exist', 404);
    }

    if (!product) {
      throw new ErrorBuilder('This Product does not exist', 404);
    }

    await verifyProduct(client, data.productId);

    const result = favoritesRepository.create(data);
    await favoritesRepository.save(result);

    return result;
  }

  public async delete(id: string): Promise<Favorite | {}> {
    const favoritesRepository = getCustomRepository(FavoritesRepository);

    const verifyId = await favoritesRepository.findOne(id);

    if (!verifyId) {
      throw new ErrorBuilder('This Favorite Product does not exist', 404);
    }

    const result = await favoritesRepository.delete(id);

    return result;
  }
}
