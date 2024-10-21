import { StartFunc as StartFuncReadDataSchema } from "./ReadDataSchema.js";
import { StartFunc as StartFuncBackend } from "./CrudGenerator/Backend.js";

let LocalFilesArray = StartFuncReadDataSchema();

let LocalEndPointsNeeded = ["Create", "Show", "SubTable", "Filter", "Search"];

StartFuncBackend({
    inFilesArray: LocalFilesArray,
    inEndPointsNeeded: LocalEndPointsNeeded
});
