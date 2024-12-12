import express from 'express';
var router = express.Router();

import { GetIdFunc, GetPrintFunc } from '../../controllers/getFuncs/EntryFile.js';

router.get('/:inId:/inFactory', GetIdFunc);
router.get('/:inId:/inFactory:/inBranch', GetPrintFunc);

export { router };