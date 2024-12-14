import express from 'express';

var router = express.Router();

import {
    GetRowDataFunc,
} from '../../controllers/getFuncs/EntryFile.js';

router.get('/:id', GetRowDataFunc);

export { router };