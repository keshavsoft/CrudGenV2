import { StartFunc as StartFuncReadDataSchema } from "./ReadDataSchema.js";
import { StartFunc as StartFuncCrudGenerator } from "../CrudGenerator/Database.js";

import dotenv from 'dotenv';
dotenv.config();

let CommonDataPk = process.env.DataPk;

let LocalFilesArray = StartFuncReadDataSchema({ inDataPk: CommonDataPk });
// console.log("LocalFilesArray : ", LocalFilesArray);

StartFuncCrudGenerator({ inFilesArray: LocalFilesArray, inDataPk: CommonDataPk });
// console.log("aaaaaaaaaa : ", LocalFilesArray);
