import express from 'express';

var router = express.Router();

import { router as routerFromQrCodes } from './All/routes.js';

router.use('/All', routerFromQrCodes);

export { router };