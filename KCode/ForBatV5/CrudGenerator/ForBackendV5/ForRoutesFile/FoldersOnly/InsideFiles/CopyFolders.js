import fs from "fs-extra";
import path from "path";
const commonFromPath = "KSTableName";

let StartFunc = ({ inTablesCollection, inTo, inFrom, inEndPointsNeeded }) => {
    let LocalTo = inTo;
    let LocalFrom = inFrom;
    const LocalEndPointsNeededArray = inEndPointsNeeded;

    let LocalTablesCollection = inTablesCollection;

    let LocalFirstLevelFolders = LocalTablesCollection.children.filter(element => {
        return "children" in element === false;
    });

    LocalFirstLevelFolders.forEach(LoopSecond => {
        const LoopInsidePath = `${LocalFrom}/${commonFromPath}`;

        let filenames = fs.readdirSync(LoopInsidePath, { withFileTypes: true });

        filenames.forEach(entry => {
            if (entry.isDirectory()) {
                if (LocalEndPointsNeededArray.includes(entry.name)) {
                    try {
                        fs.cpSync(`${LocalFrom}/${commonFromPath}/${entry.name}`, `${LocalTo}/${path.parse(LoopSecond.name).name}/${entry.name}`, {
                            recursive: true,
                        });

                        
                    } catch (error) {
                        console.log(error.message);
                    };
                };
            };
        });
    });
};

export { StartFunc };
