import express from 'express';

var router = express.Router();

import { router as Washing } from './Washing/routes.js';
// import { router as Pressing } from './Pressing/routes.js';

router.use('/Washing', Washing);
// router.use('/Pressing', Pressing);

export { router };