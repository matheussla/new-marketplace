import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import bodyParser from 'body-parser';
import 'reflect-metadata';
import errorHandler from './middlewares/errorHandler';
import setupSwagger from './config/swagger';

import routes from './routes';

import './database';

const app = express();

setupSwagger(app);

app.use(cors());

app.use(bodyParser.json());

app.use('/', routes);

app.use(errorHandler);

export default app;
