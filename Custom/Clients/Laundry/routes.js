import express from 'express';

var router = express.Router();

import { router as routerFromQrcodes } from './Qrcodes/routes.js';
import { router as routerFromOrders } from './Orders/routes.js';
import { router as routerToday } from './Today/routes.js';
import { router as routerAll } from './All/routes.js';
import { router as Factory } from './Factory/routes.js';
import { router as Branch } from './Branch/routes.js';
import { router as Admin } from './Admin/routes.js';

router.use('/Qrcodes', routerFromQrcodes);
router.use('/Orders', routerFromOrders);
router.use('/Today', routerToday);
router.use('/All', routerAll);
router.use('/Factory', Factory);
router.use('/Branch', Branch);
router.use('/Admin', Admin);

export { router };