import express from 'express';

var router = express.Router();

import { router as Orders } from './Orders/routes.js';
// import { router as QrCodes } from './QrCodes/routes.js';

router.use('/Orders', Orders);
// router.use('/QrCodes', QrCodes);

export { router };