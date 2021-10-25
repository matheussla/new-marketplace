/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { uuid } from 'uuidv4';
import Service from '../service';
import Product from '../../../models/product';
import ProductDTO from '../interface';

describe('Products service tests', () => {
  const service = new Service();

  test('should getAll', async () => {
    const response = new Product();

    response.id = '1234';
    response.brand = 'Apple';
    response.image = 'http://www.apple.com';
    response.title = 'Iphone 12';
    response.price = 12000;
    response.reviewScore = 10;

    jest.spyOn(service, 'getAll').mockImplementation(async () => response);

    const result = await service.getAll();
    expect(result).toEqual({
      id: '1234',
      brand: 'Apple',
      image: 'http://www.apple.com',
      title: 'Iphone 12',
      price: 12000,
      reviewScore: 10,
    });
  });

  test('should post', async () => {
    const object: ProductDTO = {
      brand: 'Apple',
      image: 'http://www.apple.com',
      title: 'Iphone 12',
      price: 12000,
      reviewScore: 10,
    };
    const response = new Product();

    response.id = '1234';
    response.brand = 'Apple';
    response.image = 'http://www.apple.com';
    response.title = 'Iphone 12';
    response.price = 12000;
    response.reviewScore = 10;

    jest.spyOn(service, 'create').mockImplementation(async () => response);

    const result = await service.create(object);
    expect(result).toEqual({
      id: '1234',
      brand: 'Apple',
      image: 'http://www.apple.com',
      title: 'Iphone 12',
      price: 12000,
      reviewScore: 10,
    });
  });

  test('should delete', async () => {
    const id = uuid();

    const response = new Product();

    response.id = '1234';
    response.brand = 'Apple';
    response.image = 'http://www.apple.com';
    response.title = 'Iphone 12';
    response.price = 12000;
    response.reviewScore = 10;

    jest.spyOn(service, 'delete').mockImplementation(async () => response);

    const result = await service.delete(id);
    expect(result).toEqual({
      id: '1234',
      brand: 'Apple',
      image: 'http://www.apple.com',
      title: 'Iphone 12',
      price: 12000,
      reviewScore: 10,
    });
  });
});
