import express from 'express';

var router = express.Router();

import {
    PutFunc, PutAsIsFunc
} from '../../controllers/putFuncs/EntryFile.js';

router.put('/:id', PutFunc);
router.put('/AsIs/:id', PutAsIsFunc);

export { router };