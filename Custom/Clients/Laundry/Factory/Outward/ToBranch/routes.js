import express from 'express';

var router = express.Router();

import { router as DcGenerate } from './DcGenerate/routes.js';

router.use('/DcGenerate', DcGenerate);

export { router };