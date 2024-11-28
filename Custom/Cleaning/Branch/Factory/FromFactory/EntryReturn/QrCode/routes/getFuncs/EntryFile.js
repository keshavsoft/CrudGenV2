import express from 'express';

var router = express.Router();

import {
    GetFunc, GetPendingFunc, GetScannedFunc, GetRowQrDataFunc, GetFromFactoryDcWiseItems, GetRowDataFunc, GetToScanPendingFunc
}
    from '../../controllers/getFuncs/EntryFile.js';

router.get('/:inFactory', GetFunc);
router.get('/Pending/:inFactory', GetPendingFunc);
router.get('/Scanned/:inFactory', GetScannedFunc);
router.get('/RowQrData/:id', GetRowQrDataFunc);
router.get('/RowData/:id/:inBranch', GetRowDataFunc);
router.get('/FromFactoryDcWiseItems/:id/:inBranch', GetFromFactoryDcWiseItems);
router.get('/ToScanPending/:id/:inBranch', GetToScanPendingFunc);

export { router };