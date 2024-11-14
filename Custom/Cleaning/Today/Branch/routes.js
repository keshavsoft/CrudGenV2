import express from 'express';

var router = express.Router();

import { router as routerFromQrcodes } from './QrCodes/routes.js';
import { router as routerFromOrders } from './Orders/routes.js';

router.use('/Qrcodes', routerFromQrcodes);
router.use('/Orders', routerFromOrders);

export { router };