import express from 'express';

var router = express.Router();

import { router as Today } from './Today/routes.js';
import { router as Branch } from './Branch/routes.js';
import { router as Dashboard } from "./Dashboard/routes.js";

router.use('/Today', Today);
router.use('/Branch', Branch);
router.use('/Dashboard', Dashboard);

export { router };