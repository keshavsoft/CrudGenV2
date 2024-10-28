import express from 'express';

var router = express.Router();

import { router as Pos } from './Pos/routes.js';

router.use('/Pos', Pos);

export { router };