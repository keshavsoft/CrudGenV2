import express from 'express';

var router = express.Router();


import { router as NewOrder } from './NewOrder/routes.js';
import { router as Delivery } from './Delivery/routes.js';

router.use('/NewOrder', NewOrder);
router.use('/Delivery', Delivery);

export { router };