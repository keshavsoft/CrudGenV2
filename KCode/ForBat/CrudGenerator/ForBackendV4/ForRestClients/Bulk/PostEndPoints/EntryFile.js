import fs from "fs";
import path from "path";
import dotenv from 'dotenv';

dotenv.config();
const CommonBulk = "Bulk";

import { StartFunc as home } from "./EndPointsContent/home.js";
import { StartFunc as InsertWithCheck } from "./EndPointsContent/InsertWithCheck.js";
import { StartFunc as MultiInsertWithCheck } from "./EndPointsContent/MultiInsertWithCheck.js";

let StartFunc = ({ inTablesCollection, inTo, inConfigJson }) => {
    let LocalTypeName = `${CommonBulk}/restClients/PostEndPoints`;
    let LocalTo = inTo;

    let LocalTablesCollection = inTablesCollection;

    let LocalFirstLevelFolders = LocalTablesCollection.children.filter(element => {
        return "children" in element === false;
    }).filter(element => element.name.endsWith(".json"))

    LocalFirstLevelFolders.forEach(element => {
        let LoopInsideFileName = path.parse(element.name).name;
        let LocalFilePath = `${LocalTo}/${LoopInsideFileName}/${LocalTypeName}`;

        home({
            inFrom: `${process.env.PORT}/${LocalTo}/${LoopInsideFileName}`,
            inTo: `${LocalFilePath}`,
            inConfigJson,
            inTableNameWithExtension: element.name
        });

        InsertWithCheck({
            inFrom: `${process.env.PORT}/${LocalTo}/${LoopInsideFileName}`,
            inTo: `${LocalFilePath}`,
            inConfigJson,
            inTableNameWithExtension: element.name
        });

        MultiInsertWithCheck({
            inFrom: `${process.env.PORT}/${LocalTo}/${LoopInsideFileName}`,
            inTo: `${LocalFilePath}`,
            inConfigJson,
            inTableNameWithExtension: element.name
        });
    });
};

export { StartFunc };