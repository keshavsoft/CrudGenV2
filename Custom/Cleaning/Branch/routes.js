import express from 'express';

var router = express.Router();

import { router as QrCode } from './QrCode/routes.js';
import { router as Factory } from './Factory/routes.js';

router.use('/QrCode', QrCode);
router.use('/Factory', Factory);

export { router };