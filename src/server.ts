// node-typescript/src/server.ts

import express from "express";
import logger from 'morgan';
import * as bodyParser from 'body-parser';


// Criando as configurações para o ExpressJS

class App {
  public express: express.Application;
  constructor() {
  this.express = express();
  this.middleware();
  this.routes();
}


private middleware(): void {
  this.express.use(logger('dev'));
  this.express.use(bodyParser.json());
  this.express.use(bodyParser.urlencoded({ extended: false }));
 }


private routes(): void { 
  let router = express.Router();
  

  router.get("/", (_, res) => {
  res.send("Hello ts-node!");
});
this.express.use('/', router);
}


}

export default new App().express;