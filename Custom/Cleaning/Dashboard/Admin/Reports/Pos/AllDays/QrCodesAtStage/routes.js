import express from 'express';

var router = express.Router();

import { router as AllBranches } from './AllBranches/routes.js';
import { router as BranchWise } from './BranchWise/routes.js';
import { router as BranchFilter } from './BranchFilter/routes.js';

router.use('/AllBranches', AllBranches);
router.use('/BranchWise', BranchWise);
router.use('/BranchFilter', BranchFilter);

export { router };