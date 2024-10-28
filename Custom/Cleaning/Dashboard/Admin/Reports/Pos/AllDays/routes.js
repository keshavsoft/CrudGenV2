import express from 'express';

var router = express.Router();

import { router as AllBranches } from './AllBranches/routes.js';
import { router as BranchWise } from './BranchWise/routes.js';

router.use('/AllBranches', AllBranches);
router.use('/BranchWise', BranchWise);

export { router };