import express from 'express';

var router = express.Router();

import {
    GetFuncs, GetToScanFuncs, GetToScanOnlyFuncs,GetSentFuncs,
    GetSentAndFactoryScanFuncs
} from '../../controllers/GetFuncs/EntryFile.js';

router.get('/:inBranch', GetFuncs);
router.get('/ToScan/:inBranch', GetToScanFuncs);
router.get('/ToScanOnly/:inBranch', GetToScanOnlyFuncs);
router.get('/Sent/:inBranch', GetSentFuncs);
router.get('/SentAndFactoryScan/:inBranch', GetSentAndFactoryScanFuncs);



export { router };