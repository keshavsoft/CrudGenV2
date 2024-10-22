import express from 'express';

var router = express.Router();

import { router as QrCode } from './QrCode/routes.js';

router.use('/QrCode', QrCode);

export { router };