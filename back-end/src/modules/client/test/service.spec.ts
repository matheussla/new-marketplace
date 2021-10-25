/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { uuid } from 'uuidv4';
import Service from '../service';
import Client from '../../../models/client';
import ClientDTO from '../interface';

describe('Clients service tests', () => {
  const service = new Service();

  test('should getAll', async () => {
    const response = new Client();

    response.id = '1234';
    response.name = 'Matheus';
    response.email = 'matheus@gmail.com';

    jest.spyOn(service, 'getAll').mockImplementation(async () => response);

    const result = await service.getAll();
    expect(result).toEqual({
      id: '1234', name: 'Matheus', email: 'matheus@gmail.com',
    });
  });

  test('should post', async () => {
    const object: ClientDTO = {
      name: 'Matheus', email: 'matheus@gmail.com',
    };
    const response = new Client();

    response.id = '1234';
    response.name = 'Matheus';
    response.email = 'matheus@gmail.com';

    jest.spyOn(service, 'create').mockImplementation(async () => response);

    const result = await service.create(object);
    expect(result).toEqual({
      id: '1234', name: 'Matheus', email: 'matheus@gmail.com',
    });
  });

  test('should delete', async () => {
    const response = new Client();
    const id = uuid();

    response.id = '1234';
    response.name = 'Matheus';
    response.email = 'matheus@gmail.com';

    jest.spyOn(service, 'delete').mockImplementation(async () => response);

    const result = await service.delete(id);
    expect(result).toEqual({
      id: '1234', name: 'Matheus', email: 'matheus@gmail.com',
    });
  });
});
