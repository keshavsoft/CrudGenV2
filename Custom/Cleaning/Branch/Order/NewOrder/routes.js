import express from 'express';

var router = express.Router();

import { router as routerFromgetFuncs } from './routes/getFuncs/EntryFile.js';
import { router as routerFrompostFuncs } from './routes/postFuncs/EntryFile.js';

router.use('/', routerFromgetFuncs);
router.use('/', routerFrompostFuncs);

export { router };