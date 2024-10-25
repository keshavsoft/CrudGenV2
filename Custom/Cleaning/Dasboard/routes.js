import express from 'express';

var router = express.Router();

import { router as Admin } from './Admin/routes.js';

router.use('/Admin', Admin);

export { router };