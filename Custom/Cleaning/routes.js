import express from 'express';

var router = express.Router();

import { router as Today } from './Today/routes.js';

router.use('/Today', Today);

export { router };