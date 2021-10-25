import { EntityRepository, Repository } from 'typeorm';
import Product from '../../models/product';

@EntityRepository(Product)
class ProductsRepository extends Repository<Product> {
}

export default ProductsRepository;
