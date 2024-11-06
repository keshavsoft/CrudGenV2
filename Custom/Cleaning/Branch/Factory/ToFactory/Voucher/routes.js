import express from 'express';

var router = express.Router();

import { router as routerGetFuncs } from './routes/GetFuncs/EntryFile.js';
import { router as routerDeleteFuncs } from './routes/DeleteFuncs/EntryFile.js';

router.use('/', routerGetFuncs);
router.use('/', routerDeleteFuncs);

export { router };