import express from 'express';

var router = express.Router();

import { router as Inward } from './Inward/routes.js';
// import { router as Process } from './Process/routes.js';
// import { router as Outward } from './Outward/routes.js';

router.use('/Inward', Inward);
// router.use('/Process', Process);
// router.use('/Outward', Outward);

export { router };