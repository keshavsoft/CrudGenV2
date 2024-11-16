import express from 'express';

var router = express.Router();

import {
    GetRowDataFunc, GetRowQrDataFunc, GetRowCountFunc
}
    from '../../controllers/getFuncs/EntryFile.js';

// router.get('/:inFactory', GetFunc);
// router.get('/Pending/:inFactory', GetPendingFunc);
// router.get('/Scanned/:inFactory', GetScannedFunc);
router.get('/RowData/:id/:inFactory', GetRowDataFunc);
router.get('/RowQrData/:id', GetRowQrDataFunc);
router.get('/RowCount/:id/:inFactory', GetRowCountFunc);

export { router };