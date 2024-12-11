import express from 'express';

var router = express.Router();


import { router as Completion } from './Completion/routes.js';

router.use('/Completion', Completion);

export { router };