import express from 'express';

var router = express.Router();

import {
    GetWithDataFunc
} from '../../controllers/postFuncs/EntryFile.js';

router.post('/WithData', GetWithDataFunc);

export { router };