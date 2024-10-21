import { StartFunc as StartFuncSecondLevelEntryFile } from "./SecondLevelEntryFile.js";

let StartFunc = ({ inTablesCollection, inDataPk }) => {
    let LocalTablesCollection = inTablesCollection;

    if ("children" in LocalTablesCollection === false) {
        return;
    };

    StartFuncSecondLevelEntryFile({
        inTablesCollection: LocalTablesCollection,
        inDataPk
    });
};

export { StartFunc };
