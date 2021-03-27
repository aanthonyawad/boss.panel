import 'dotenv/config';

import 'reflect-metadata';

import App from './app';
import PartnersController from './controllers/partners/partners.controller';
import { validateEnv } from './utils/validateEnv';

// validateEnv();
 
const app = new App(
    [
      new PartnersController()
    ],
   3000
  );

app.listen();