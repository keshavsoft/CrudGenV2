import express from 'express';

var router = express.Router();

import { router as routerFromScan } from './Scan/routes.js';
// import { router as routerFromReWash } from './ReWash/routes.js';
import { router as routerFromReturn } from './Return/routes.js';

router.use('/Scan', routerFromScan);
// router.use('/ReWash', routerFromReWash);
router.use('/Return', routerFromReturn);

export { router };