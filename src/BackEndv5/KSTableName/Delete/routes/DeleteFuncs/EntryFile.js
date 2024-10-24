import express from 'express';

var router = express.Router();

import { DeleteFunc, ReferenceCheckFunc, ParamFunc, QueryFunc } from '../../controllers/DeleteFuncs/EntryFile.js';

import { DeleteFunc as DeleteFuncmiddleware } from '../../middlewares/DeleteFuncs/DeleteFunc.js';

router.delete('/:Id', DeleteFuncmiddleware, DeleteFunc);
router.delete('/ReferenceCheck/:Id', DeleteFuncmiddleware, ReferenceCheckFunc);
router.delete('/ByPk/:Id', DeleteFuncmiddleware, ParamFunc);
router.delete('/', DeleteFuncmiddleware, QueryFunc);

export { router };