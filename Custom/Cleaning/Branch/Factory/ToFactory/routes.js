import express from 'express';

var router = express.Router();

import { router as routerFromScan } from './Scan/routes.js';
// import { router as routerFromReturn } from './Return/routes.js';

router.use('/Scan', routerFromScan);
// router.use('/Return', routerFromReturn);

export { router };