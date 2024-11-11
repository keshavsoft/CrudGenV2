import fs from "fs-extra";
import path from "path";
const commonFromPath = "KSTableName";

let StartFunc = ({ inTablesCollection, inTo, inFrom, inEndPointsNeeded }) => {
    let LocalTo = inTo;
    let LocalFrom = inFrom;
    const LocalEndPointsNeededArray = inEndPointsNeeded;
     console.log("LocalEndPointsNeededArray : ", LocalEndPointsNeededArray);

    let LocalTablesCollection = inTablesCollection;

    let LocalFirstLevelFolders = LocalTablesCollection.children.filter(element => {
        return "children" in element === false;
    });

    LocalFirstLevelFolders.forEach(LoopSecond => {
        const LoopInsidePath = `${LocalFrom}/${commonFromPath}`;
        // console.log("aaaaaaaaaa : ", LoopSecond);

        let filenames = fs.readdirSync(LoopInsidePath, { withFileTypes: true });

        filenames.forEach(entry => {
            if (entry.isDirectory()) {
                if (LocalEndPointsNeededArray.includes(entry.name)) {
                    try {
                        fs.cpSync(`${LocalFrom}/${commonFromPath}/${entry.name}`, `${LocalTo}/${path.parse(LoopSecond.name).name}/${entry.name}`, {
                            recursive: true,
                        });

                        LocalFuncWriteToRouteFile({
                            inEndPointsNeeded: LocalEndPointsNeededArray,
                            inFilePath: `./${inTo}/${path.parse(LoopSecond.name).name}/routes.js`
                        });
                    } catch (error) {
                        console.log(error.message);
                    };
                };
            };
        });
    });
};

const LocalFuncWriteToRouteFile = ({ inEndPointsNeeded, inFilePath }) => {
    let LocalFileData = [];

    LocalFileData.push("import express from 'express';");
    LocalFileData.push("");
    LocalFileData.push("var router = express.Router();");
    LocalFileData.push("");

    inEndPointsNeeded.forEach(element => {
        LocalFileData.push(`import { router as ${element} } from './${element}/routes.js';`);
    });

    LocalFileData.push("");

    inEndPointsNeeded.forEach(element => {
        LocalFileData.push(`router.use('/${element}', ${element});`);
    });

    LocalFileData.push("");
    LocalFileData.push("export { router };");

    fs.writeFileSync(inFilePath, LocalFileData.join("\r\n"));
};

export { StartFunc };
