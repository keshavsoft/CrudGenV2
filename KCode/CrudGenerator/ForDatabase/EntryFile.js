import { StartFunc as StartFuncForFlatJson } from "./ForFlatJson/EntryFile.js";
import { StartFunc as StartFuncForSequelize } from "./sqlite/ForSequelize/CreateData.js";

import ConfigJson from '../../Config.json' assert {type: 'json'};
import fs from "fs";
import path from "path";

import dotenv from 'dotenv';
dotenv.config();
const CommonDataPk = process.env.DataPk;

let StartFunc = ({ inFilesArray, inFrom, inDataPk }) => {
    LocalFuncCreateFolder();
    LocalFuncCreateTableAsFolder({ inTablesCollection: inFilesArray });

    if (ConfigJson.isSequelize) {
        StartFuncForSequelize();

        return;
    };

    StartFuncForFlatJson({
        inTablesCollection: inFilesArray,
        inFrom,
        inDataPk
    });
};

let LocalFuncCreateFolder = () => {
    try {
        if (fs.existsSync(`${ConfigJson.ToDataDetails.DataPath}/${CommonDataPk}`) === false) {
            fs.mkdirSync(`${ConfigJson.ToDataDetails.DataPath}/${CommonDataPk}`, { recursive: true });
        };
    } catch (error) {
        console.log("error  : ", error);
    };
};

let LocalFuncCreateTableAsFolder = ({ inTablesCollection }) => {
    let LocalTablesCollection = inTablesCollection;

    if ("children" in LocalTablesCollection === false) {
        return;
    };

    try {
        LocalTablesCollection.children.forEach(element => {
            let LoopInsidePath = `${ConfigJson.ToDataDetails.DataPath}/${CommonDataPk}/${path.parse(element.name).name}`;

            if (fs.existsSync(LoopInsidePath) === false) {
                fs.mkdirSync(LoopInsidePath, { recursive: true });
            };
        });
    } catch (error) {
        console.log("error  : ", error);
    };
};

export { StartFunc };
