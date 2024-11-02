import express from 'express';

var router = express.Router();

import { router as routerFromScan } from './Scan/routes.js';
import { router as routerFromVoucher } from './Voucher/routes.js';

router.use('/Scan', routerFromScan);
router.use('/Voucher', routerFromVoucher);

export { router };