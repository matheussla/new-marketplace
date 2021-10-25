import { createConnection } from 'typeorm';

try {
  createConnection();
} catch (error) {
  throw (Error(error));
}
