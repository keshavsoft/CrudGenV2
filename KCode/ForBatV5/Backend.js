import { StartFunc as StartFuncReadDataSchema } from "./ReadDataSchema.js";
import { StartFunc as StartFuncBackend } from "./CrudGenerator/Backend.js";
import { StartFunc as endPointsNeeded } from "./endPointsNeeded.js";

import dotenv from 'dotenv';
dotenv.config();

let CommonDataPk = process.env.DataPk;

let LocalFilesArray = StartFuncReadDataSchema({ inDataPk: CommonDataPk });

let LocalEndPointsNeeded = endPointsNeeded({ inDataPk: CommonDataPk });

StartFuncBackend({
    inFilesArray: LocalFilesArray,
    inEndPointsNeeded: LocalEndPointsNeeded
});
