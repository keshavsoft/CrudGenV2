import fs from "fs";
import path from "path";
import dotenv from 'dotenv';
dotenv.config();
const CommonSearch = "Search";

import { StartFunc as home } from "./EndPointsContent/home.js";
import { StartFunc as asArray } from "./EndPointsContent/asArray.js";
import { StartFunc as asObject } from "./EndPointsContent/asObject.js";
import { StartFunc as asArrayAsInt } from "./EndPointsContent/asArrayAsInt.js";

let StartFunc = ({ inTablesCollection, inTo }) => {
    let LocalTypeName = `${CommonSearch}/restClients/GetEndPoints`;
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
            inTo: `${LocalFilePath}`
        });

        asArray({
            inFrom: `${process.env.PORT}/${LocalTo}/${LoopInsideFileName}`,
            inTo: `${LocalFilePath}`
        });

        asObject({
            inFrom: `${process.env.PORT}/${LocalTo}/${LoopInsideFileName}`,
            inTo: `${LocalFilePath}`
        });

        asArrayAsInt({
            inFrom: `${process.env.PORT}/${LocalTo}/${LoopInsideFileName}`,
            inTo: `${LocalFilePath}`
        });

    });
};

const LocalFuncWriteToHome = ({ inFrom, inTo }) => {
    let LocalFileData = `GET http://localhost:${inFrom}/${CommonSearch}`;

    fs.writeFileSync(`${inTo}/home.http`, LocalFileData);
};

export { StartFunc };