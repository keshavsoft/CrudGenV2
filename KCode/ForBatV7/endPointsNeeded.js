import fs from "fs";

let StartFunc = ({ inDataPk }) => {
    let LocalDataPk = inDataPk;

    let LocalDataPath = `KSCode/JsonSchema/${LocalDataPk}/EndPoints/needed.json`;

    let LoopInsideFileData = fs.readFileSync(LocalDataPath, "utf8");

    return JSON.parse(LoopInsideFileData);
};

export { StartFunc };
