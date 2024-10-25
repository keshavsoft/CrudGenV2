import express from 'express';

var router = express.Router();

import { router as AllBranches } from './AllBranches/routes.js';

router.use('/AllBranches', AllBranches);

export { router };