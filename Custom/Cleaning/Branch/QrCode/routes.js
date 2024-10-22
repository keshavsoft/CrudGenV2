import express from 'express';

var router = express.Router();

import { router as Status } from './Status/routes.js';

router.use('/Status', Status);

export { router };