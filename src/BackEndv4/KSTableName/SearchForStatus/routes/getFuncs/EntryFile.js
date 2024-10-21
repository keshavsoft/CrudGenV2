import express from 'express';

var router = express.Router();

import {
    GetFunc, GetAsObjectFunc, GetAsArrayFunc, GetAsArrayAsIntFunc
} from '../../controllers/getFuncs/EntryFile.js';

router.get('/', GetFunc);
router.get('/AsObject', GetAsObjectFunc);
router.get('/AsArray', GetAsArrayFunc);
router.get('/AsArrayAsInt', GetAsArrayAsIntFunc);

export { router };