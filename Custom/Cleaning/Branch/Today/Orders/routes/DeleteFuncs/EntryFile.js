import express from 'express';
var router = express.Router();

import { deleteFunc } from '../../controllers/DeleteFuncs/EntryFile.js';

router.delete('/:inBranch/:inId', deleteFunc);

export { router };