import express from 'express';

var router = express.Router();

import {
    GetQrFuncs, GetAsIsFuncs
} from '../../controllers/GetFuncs/EntryFile.js';

router.get('/:Qr', GetQrFuncs);
router.get('/AsIs', GetAsIsFuncs);

export { router };