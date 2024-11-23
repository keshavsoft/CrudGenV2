import express from 'express';

var router = express.Router();

// import { router as routerFromgetFuncs } from './routes/getFuncs/EntryFile.js';
import { router as routerFromDeleteFuncs } from './routes/DeleteFuncs/EntryFile.js';

// router.use('/', routerFromgetFuncs);
router.use('/', routerFromDeleteFuncs);

export { router };