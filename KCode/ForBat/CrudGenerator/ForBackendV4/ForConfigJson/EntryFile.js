import fs from 'fs';
import ConfigJson from '../../../../Config.json' assert {type: 'json'};

import dotenv from 'dotenv';
dotenv.config();

let StartFunc = async ({ inTablesCollection, inFrom, inTo }) => {
    let LocalFileName = "Config.json";
    let LocalFrom = inFrom;
    let LocalTo = inTo;

    let LocalFileData = fs.readFileSync(`${LocalFrom}/${LocalFileName}`);
    let LocalfileNameJsonData = JSON.parse(LocalFileData);

    if (ConfigJson.isSequelize) {
        LocalfileNameJsonData.isSequelize = ConfigJson.isSequelize;
        LocalfileNameJsonData.sequelizeConfig = ConfigJson.sequelizeConfig;

        LocalfileNameJsonData.sequelizeConfig.tableAndColumns = inTablesCollection;
        LocalfileNameJsonData.sequelizeConfig.DataPk = ConfigJson.ToDataDetails.DataPk;
        LocalfileNameJsonData.sequelizeConfig.DbName = ConfigJson.ToDataDetails.DbName;
        LocalfileNameJsonData.sequelizeConfig.DataPath = ConfigJson.ToDataDetails.DataPath;
    } else {
        LocalfileNameJsonData.isMongoDb = ConfigJson.isMongoDb;
    };

    let LocalDataPk = process.env.DataPk;
    
    LocalfileNameJsonData.jsonConfig.tableAndColumns = inTablesCollection;
    LocalfileNameJsonData.jsonConfig.DataPk = LocalDataPk;
    LocalfileNameJsonData.jsonConfig.DataPath = ConfigJson.ToDataDetails.DataPath;

    LocalfileNameJsonData.JsonPath = `${ConfigJson.JsonPath}/${LocalDataPk}`;

    fs.writeFileSync(`${LocalTo}/${LocalFileName}`, JSON.stringify(LocalfileNameJsonData));
};

export { StartFunc };