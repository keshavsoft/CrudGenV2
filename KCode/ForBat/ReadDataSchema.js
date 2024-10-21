import dirTree from "directory-tree";
import fs from "fs";

let CommonFromFolderName = "DataSchema";

import dotenv from 'dotenv';
dotenv.config();

let StartFunc = () => {
    let LocalDataPk = process.env.DataPk;

    let LocalDataPath = `KCode/${CommonFromFolderName}/${LocalDataPk}`;
    const tree = dirTree(LocalDataPath, { extensions: /\.json/ });

    tree.children.forEach(element => {
        let LoopInsideFileData = fs.readFileSync(element.path, "utf8");

        element.fileData = JSON.parse(LoopInsideFileData);
    });

    console.log(`TableSchema from : ${LocalDataPk}`);

    return tree;
};

export { StartFunc };
