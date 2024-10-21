import dirTree from "directory-tree";
import fs from "fs";

let CommonFromFolderName = "DataSchema";

let StartFunc = ({ inDataPk }) => {
    let LocalDataPk = inDataPk;

    let LocalDataPath = `KSCode/JsonSchema/${LocalDataPk}/${CommonFromFolderName}`;
    const tree = dirTree(LocalDataPath, { extensions: /\.json/ });

    tree.children.forEach(element => {
        let LoopInsideFileData = fs.readFileSync(element.path, "utf8");

        element.fileData = JSON.parse(LoopInsideFileData);
    });

    console.log(`TableSchema from : ${LocalDataPk}`);

    return tree;
};

export { StartFunc };
