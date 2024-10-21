import express from 'express';

var router = express.Router();

import {
    GetFuncs, GetRowDataFunc
} from '../../controllers/GetFuncs/EntryFile.js';

router.get('/:inBranch', GetFuncs);
router.get('/RowData/:id/:inBranch', GetRowDataFunc);


export { router };