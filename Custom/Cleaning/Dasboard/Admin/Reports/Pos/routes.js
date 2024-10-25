import express from 'express';

var router = express.Router();

import { router as Today } from './Today/routes.js';
import { router as AllDays } from './AllDays/routes.js';

router.use('/Today', Today);
router.use('/AllDays', AllDays);

export { router };