import 'reflect-metadata'; // this shim is required
import * as bodyParser from 'body-parser';
import container from './ioc/inversify-config';
import './controllers//Home-Controller';
import express from 'express';
import { InversifyExpressServer } from 'inversify-express-utils';

const port = process.env.PORT || 3000;

// create server
const server = new InversifyExpressServer(container);
server.setConfig((app) => {
  // add body parser
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
});

const app = server.build();

app.use(express.static('dist'));


app.listen(port, () => {
	console.log(`Server is listening on port: ${port}`);
});