import express from 'express';

var router = express.Router();

import {
    GetFuncs, GetToScanFuncs, GetToScanOnlyFuncs
} from '../../controllers/GetFuncs/EntryFile.js';

router.get('/:inBranch', GetFuncs);
router.get('/ToScan/:inBranch', GetToScanFuncs);
router.get('/ToScanOnly/:inBranch', GetToScanOnlyFuncs);


export { router };