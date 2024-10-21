import express from 'express';

var router = express.Router();

import {
    GetFuncs, GetItemsFuncs
} from '../../controllers/GetFuncs/EntryFile.js';

router.get('/:inBranch', GetFuncs);
router.get('/Items/:inBranch', GetItemsFuncs);

export { router };