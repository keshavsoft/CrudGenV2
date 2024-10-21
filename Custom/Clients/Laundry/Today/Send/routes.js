import express from 'express';

var router = express.Router();

import { router as routerFromVoucher } from './Voucher/routes.js';
import { router as routerFromQrCodes } from './QrCodes/routes.js';

router.use('/Voucher', routerFromVoucher);
router.use('/QrCodes', routerFromQrCodes);

export { router };