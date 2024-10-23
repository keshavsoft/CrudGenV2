import express from 'express';

var router = express.Router();

import { router as FromFactory } from './FromFactory/routes.js';

router.use('/FromFactory', FromFactory);

export { router };