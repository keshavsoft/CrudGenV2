import fs from "fs-extra";

const CommonFromPath = "KSCode/JsonSchema";
const CommonToPath = "KData/JSON";

let StartFunc = ({ inTablesCollection, inDataPk }) => {
    let LocalTablesCollection = inTablesCollection;
    let LocalFromPath = `${CommonFromPath}/${inDataPk}/DataSchema`;
    let LocalToPath = `${CommonToPath}/${inDataPk}`;

    let LocalFirstLevelFolders = LocalTablesCollection.children.filter(element => {
        return "children" in element === false;
    });
    // console.log("---------- : ", LocalFirstLevelFolders);

    LocalFirstLevelFolders.forEach(LoopSecondLevel => {
        let LoopInsideFirstChar = LoopSecondLevel.path.replaceAll("\\", "/");
        let LoopInside = LoopInsideFirstChar.replace(LocalFromPath, LocalToPath);

        fs.writeFileSync(LoopInside, JSON.stringify([]));
    });
};

export { StartFunc };
