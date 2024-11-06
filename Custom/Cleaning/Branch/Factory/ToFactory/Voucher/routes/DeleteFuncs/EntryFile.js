import express from 'express';

var router = express.Router();

import {
    DeleteFuncs
} from '../../controllers/DeleteFuncs/EntryFile.js';

router.delete('/:id', DeleteFuncs);

export { router };