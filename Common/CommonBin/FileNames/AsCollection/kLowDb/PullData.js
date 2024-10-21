import fs from "fs";
import path from 'path';
import dirTree from "directory-tree";
import ConfigJson from '../../../../../binV4/Config.json' assert {type: 'json'};

let StartFunc = () => {
    let LocalDataPath = `${ConfigJson.jsonConfig.DataPath}/${ConfigJson.jsonConfig.DataPk}`;
    const tree = dirTree(LocalDataPath);

    let LocalMap = tree.children.map(e => {
        return { "FileName": path.parse(e.name).name }
    });


    return LocalMap;
};

export { StartFunc };
