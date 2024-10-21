import express from 'express';

var router = express.Router();

import {
    GetRowDataFunc, GetRowCountFunc
} from '../../controllers/GetFuncs/EntryFile.js';

router.get('/RowData/:id/:inBranch', GetRowDataFunc);
router.get('/RowCount/:id/:inBranch', GetRowCountFunc);

export { router };