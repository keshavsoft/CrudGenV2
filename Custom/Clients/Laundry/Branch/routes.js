import express from 'express';

var router = express.Router();

import { router as routerFromEntry } from './Entry/routes.js';
import { router as FromFactory } from './FromFactory/routes.js';

router.use('/Entry', routerFromEntry);
router.use('/FromFactory', FromFactory);

export { router };