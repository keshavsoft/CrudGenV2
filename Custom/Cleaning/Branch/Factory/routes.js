import express from 'express';

var router = express.Router();

import { router as FromFactory } from './FromFactory/routes.js';
import { router as ToFactory } from './ToFactory/routes.js';


router.use('/FromFactory', FromFactory);
router.use('/ToFactory', ToFactory);


export { router };