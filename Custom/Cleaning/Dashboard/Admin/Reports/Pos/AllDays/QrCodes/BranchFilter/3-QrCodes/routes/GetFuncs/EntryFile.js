import express from 'express';

var router = express.Router();

import {
    GetFuncs
} from '../../controllers/GetFuncs/EntryFile.js';

import {
    GetFuncs as MiddlewareGetFunc
} from '../../Middleware/getFuncs/EntryFile.js';

router.get('/:inBranchName',MiddlewareGetFunc,GetFuncs);

export { router };