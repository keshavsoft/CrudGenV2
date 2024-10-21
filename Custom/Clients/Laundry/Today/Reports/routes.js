import express from 'express';

var router = express.Router();

import { router as routerFromQrCodes } from './QrCodes/routes.js';
import { router as Orders } from './Orders/routes.js';

router.use('/QrCodes', routerFromQrCodes);
router.use('/Orders', Orders);

export { router };