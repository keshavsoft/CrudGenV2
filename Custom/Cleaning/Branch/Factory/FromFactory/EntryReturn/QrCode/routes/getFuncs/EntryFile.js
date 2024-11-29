import express from 'express';

var router = express.Router();

import {
    GetFunc, GetPendingFunc, GetScannedFunc, GetRowQrDataFunc, GetFromFactoryDcWiseItems, GetRowDataFunc, GetToScanPendingFunc
}
    from '../../controllers/getFuncs/EntryFile.js';

router.get('/:inBranch', GetFunc);
router.get('/Pending/:inBranch', GetPendingFunc);
router.get('/Scanned/:inBranch', GetScannedFunc);
router.get('/RowQrData/:id', GetRowQrDataFunc);
router.get('/RowData/:id/:inBranch', GetRowDataFunc);
router.get('/FromFactoryDcWiseItems/:id/:inBranch', GetFromFactoryDcWiseItems);
router.get('/ToScanPending/:id/:inBranch', GetToScanPendingFunc);

export { router };