import express from 'express';

var router = express.Router();

import { router as Branch } from './Branch/routes.js';

router.use('/Branch', Branch);

export { router };