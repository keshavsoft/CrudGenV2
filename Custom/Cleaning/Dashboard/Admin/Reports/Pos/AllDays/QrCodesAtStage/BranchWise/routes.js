import express from "express";

var router = express.Router();

import { router as InGenerate } from "./1-InGenerate/routes.js";
import { router as InBranch } from "./12-InBranch/routes.js";
import { router as InWashing } from "./13-InWashing/routes.js";
import { router as InPressing } from "./14-InPressing/routes.js";

router.use("/InGenerate", InGenerate);
router.use("/InBranch", InBranch);
router.use("/InWashing", InWashing);
router.use("/InPressing", InPressing);

export { router };
