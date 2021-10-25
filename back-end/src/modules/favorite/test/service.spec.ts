/* eslint-disable @typescript-eslint/consistent-type-assertions */
import Service from '../service';
import Favorite from '../../../models/favoriteProduct';
import FavoriteDTO from '../interface';

describe('favorite service tests', () => {
  const service = new Service();

  test('should post', async () => {
    const object: FavoriteDTO = {
      clientId: '555', productId: '123',
    };
    const response = new Favorite();

    response.id = '1234';
    response.clientId = '555';
    response.productId = '123';

    jest.spyOn(service, 'create').mockImplementation(async () => response);

    const result = await service.create(object);
    expect(result).toEqual({
      id: '1234', clientId: '555', productId: '123',
    });
  });
});
