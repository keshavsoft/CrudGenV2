import { StartFunc as StartFuncForeignKeyCheck } from "./Checks/ForeignKeyCheck.js";

let StartFunc = ({ inTableSchema, inDataToInsert }) => {
    let LocalReturnData = { KTF: true, JSONFolderPath: "", CreatedLog: {} };
    const LocalTableSchema = inTableSchema;
    let LocalKeysNeeded = {};

    for (const prop in LocalTableSchema.fileData) {
        if ("references" in LocalTableSchema.fileData[prop]) {
            LocalKeysNeeded[prop] = LocalTableSchema.fileData[prop];
        };
    };

    if ((Object.keys(LocalKeysNeeded).length === 0) === false) {
        return LocalFuncTrue({ inKeysNeeded: LocalKeysNeeded, inDataToInsert });
    };

    return LocalReturnData;
};

let LocalFuncTrue = ({ inKeysNeeded, inDataToInsert }) => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };
    let LocalKeysNeeded = inKeysNeeded;

    for (const [key, value] of Object.entries(LocalKeysNeeded)) {
        let LocalValueNeeded = value

        let LocalK1 = LocalValueNeeded.references;

        let LocalDataNeeded = StartFuncForeignKeyCheck({
            inFileName: LocalK1.model,
            inKey: LocalK1.key, inCheckWith: inDataToInsert[key]
        });

        if (LocalDataNeeded === false) {
            LocalReturnData.KReason = `${key} : Foreign Key Check failed...`;
            return LocalReturnData;
        };
    };

    return LocalReturnData;
};

export { StartFunc };