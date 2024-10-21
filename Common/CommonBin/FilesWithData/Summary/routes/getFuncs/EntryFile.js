import express from 'express';
var router = express.Router();

import { GetFunc, GetNotEmptyFunc } from '../../controllers/getFuncs/EntryFile.js';

router.get('/', GetFunc);
router.get('/NotEmpty', GetNotEmptyFunc);

export { router };