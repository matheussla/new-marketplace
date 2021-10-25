import { EntityRepository, Repository } from 'typeorm';
import FavoriteProduct from '../../models/favoriteProduct';

@EntityRepository(FavoriteProduct)
class FavoritesRepository extends Repository<FavoriteProduct> {
}

export default FavoritesRepository;
