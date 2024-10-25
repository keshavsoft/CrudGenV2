import express from 'express';

var router = express.Router();

import { router as Reports } from './Reports/routes.js';

router.use('/Reports', Reports);

export { router };