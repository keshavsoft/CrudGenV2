import express from 'express';

var router = express.Router();

import {
    GetFunc, GetQrStatusFunc, GetRowDataFunc
}
    from '../../controllers/getFuncs/EntryFile.js';

router.get('/:inFactory', GetFunc);
router.get('/QrStatus/:inBranch', GetQrStatusFunc);
router.get('/RowData/:id', GetRowDataFunc);

export { router };