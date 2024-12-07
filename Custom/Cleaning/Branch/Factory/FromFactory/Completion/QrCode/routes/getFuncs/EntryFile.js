import express from 'express';
var router = express.Router();

import {
    GetFunc, GetPendingFunc, GetScannedFunc, GetRowQrDataFunc, GetFromFactoryDcWiseItems, GetRowDataFunc, GetToScanPendingFunc
} from '../../controllers/getFuncs/EntryFile.js';

import { GetFuncs } from '../../Middleware/getFuncs/EntryFile.js';
import { FactoryItemsMiddleware } from "../../Middleware/getFuncs/FactoryItems.js";
import { PendingMiddleware } from "../../Middleware/getFuncs/Pending.js";
import { GetScannedMiddleware } from "../../Middleware/getFuncs/Scanned.js";
import { RowQrDataMiddleware } from "../../Middleware/getFuncs/RowQrData.js";
import { RowDataMiddleware } from "../../Middleware/getFuncs/RowData.js";
import { ToScanPendingMiddleware } from "../../Middleware/getFuncs/ToScanPending.js";

router.get('/:inBranch', GetFuncs, GetFunc);
router.get('/Pending/:inBranch', PendingMiddleware, GetPendingFunc);
router.get('/Scanned/:inBranch', GetScannedMiddleware, GetScannedFunc);
router.get('/RowQrData/:id', RowQrDataMiddleware, GetRowQrDataFunc);
router.get('/RowData/:id/:inBranch', RowDataMiddleware, GetRowDataFunc);
router.get('/FromFactoryDcWiseItems/:id/:inBranch', FactoryItemsMiddleware, GetFromFactoryDcWiseItems);
router.get('/ToScanPending/:id/:inBranch', ToScanPendingMiddleware, GetToScanPendingFunc);

export { router };
