import { StartFunc as StartFuncForRoutesFile } from '../ForBackendV5/ForRoutesFile/EntryFile.js';

import { StartFunc as StartFuncForConfigJson } from './ForConfigJson/EntryFile.js';

import { StartFunc as StartFuncForRestClients } from '../ForBackendV5/ForRestClients/EntryFile.js';
import { StartFunc as StartFuncForTableName } from '../ForBackendV5/ForTableName/EntryFile.js';
import { StartFunc as StartFuncForkSequelize } from '../ForBackendV5/ForkSequelize/EntryFile.js';

import fs from "fs-extra";

let StartFunc = async ({ inTablesCollection, inFrom, inTo, inEndPointsNeeded }) => {
    let LocalEndPointsNeeded = inEndPointsNeeded;
    let LocalFrom = inFrom;
    let LocalTo = inTo;
    let LocalTablesCollection = inTablesCollection;

    if ("children" in LocalTablesCollection === false) {
        return;
    };

    LocalFuncCreateFolders({ inTo });

    StartFuncForRoutesFile({
        inTablesCollection, inFrom, inTo,
        inEndPointsNeeded: LocalEndPointsNeeded
    });

    await StartFuncForConfigJson({ inTablesCollection, inFrom, inTo });

    const ConfigJson = fs.readFileSync(`./${LocalTo}/Config.json`, { encoding: 'utf8' });

    StartFuncForRestClients({
        inTablesCollection, inFrom, inTo,
        inConfigJson: JSON.parse(ConfigJson),
        inEndPointsNeeded: LocalEndPointsNeeded
    });

    StartFuncForTableName({
        inTablesCollection, inFrom: LocalFrom,
        inTo
    });

    StartFuncForkSequelize({ inFrom, inTo });
};

let LocalFuncCreateFolders = ({ inTo }) => {
    let LocalTo = inTo;

    if (fs.existsSync(LocalTo) === false) {
        fs.mkdirSync(LocalTo);
    };
};

export { StartFunc };