import express from 'express';

var router = express.Router();

import { router as routerFromClientsFolder } from './Clients/routes.js';
// import { router as Cleaning } from './Cleaning/routes.js';

router.use('/Clients', routerFromClientsFolder);
// router.use('/Cleaning', Cleaning);

export { router };