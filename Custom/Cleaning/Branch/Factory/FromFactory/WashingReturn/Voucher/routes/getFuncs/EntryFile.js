import express from 'express';

var router = express.Router();

import {
    GetFunc,GetQrStatusFunc
}
    from '../../controllers/getFuncs/EntryFile.js';

router.get('/:inFactory', GetFunc);
router.get('/QrStatus/:inBranch', GetQrStatusFunc);

export { router };