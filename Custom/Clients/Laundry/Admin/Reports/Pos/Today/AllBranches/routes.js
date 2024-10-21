import express from "express";

var router = express.Router();

import { router as QrCodes } from "./3-QrCodes/routes.js";
import { router as Orders } from "./1-Orders/routes.js";
import { router as ItemWise } from "./2-ItemWise/routes.js";
import { router as ToFactory } from "./4-ToFactory/routes.js";
import { router as FactoryScan } from "./5-FactoryScan/routes.js";
import { router as FactoryInwardReturn } from "./6-FactoryInwardReturn/routes.js";
import { router as WashingStart } from "./7-WashingStart/routes.js";
import { router as WashingReject } from "./8-WashingReject/routes.js";

router.use("/QrCodes", QrCodes);
router.use("/Orders", Orders);
router.use("/ItemWise", ItemWise);
router.use("/ToFactory", ToFactory);
router.use("/FactoryScan", FactoryScan);
router.use("/FactoryInwardReturn", FactoryInwardReturn);
router.use("/WashingStart", WashingStart);
router.use("/WashingReject", WashingReject);

export { router };
