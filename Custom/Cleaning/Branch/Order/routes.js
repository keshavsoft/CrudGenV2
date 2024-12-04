import express from 'express';

var router = express.Router();


import { router as NewOrder } from './NewOrder/routes.js';

router.use('/NewOrder', NewOrder);

export { router };