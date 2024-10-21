import express from 'express';

var router = express.Router();

import {
    GetFunc, GetMaxRowFunc
} from '../../controllers/getFuncs/EntryFile.js';

router.get('/MaxRow', GetMaxRowFunc);
router.get('/:rows', GetFunc);

export { router };