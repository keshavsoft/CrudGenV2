import express from 'express';

var router = express.Router();

import { router as DcGenerate } from './DcGenerate/routes.js';
import { router as QrCode } from './QrCode/routes.js';
import { router as Voucher } from './Voucher/routes.js';

router.use('/DcGenerate', DcGenerate);
router.use('/QrCode', QrCode);
router.use('/Voucher', Voucher);

export { router };