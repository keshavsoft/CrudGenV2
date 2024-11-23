import express from 'express';
var router = express.Router();

import { GetIdFunc } from '../../controllers/getFuncs/EntryFile.js';

router.get('/:inId', GetIdFunc);

export { router };