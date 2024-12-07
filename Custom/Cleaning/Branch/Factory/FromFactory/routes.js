import express from 'express';

var router = express.Router();

import { router as routerFromScan } from './Scan/routes.js';
import { router as routerFromEntryReturn } from './EntryReturn/routes.js';
import { router as routerFromWashingReturn } from './WashingReturn/routes.js';
import { router as Completion } from './Completion/routes.js';
import { router as PressingReturn } from './PressingReturn/routes.js';


// import { router as routerFromReturn } from './Return/routes.js';

router.use('/Scan', routerFromScan);
router.use('/EntryReturn', routerFromEntryReturn);
router.use('/WashingReturn', routerFromWashingReturn);
router.use('/Completion', Completion);
router.use('/PressingReturn', PressingReturn);


// router.use('/Return', routerFromReturn);

export { router };