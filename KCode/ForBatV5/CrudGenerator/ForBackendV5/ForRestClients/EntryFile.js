import { StartFunc as Show } from './Show/EntryFile.js';
import { StartFunc as Create } from './Create/EntryFile.js';
import { StartFunc as Alter } from './Alter/EntryFile.js';
import { StartFunc as Upload } from './Upload/EntryFile.js';
import { StartFunc as Images } from './Images/EntryFile.js';
import { StartFunc as Search } from './Search/EntryFile.js';
import { StartFunc as Bulk } from './Bulk/EntryFile.js';
import { StartFunc as ShowWithColumns } from './ShowWithColumns/EntryFile.js';
import { StartFunc as Sort } from './Sort/EntryFile.js';
import { StartFunc as SubTable } from "./SubTable/EntryFile.js";

let StartFunc = ({ inTablesCollection, inTo, inFrom, inConfigJson, inEndPointsNeeded }) => {
    if (inEndPointsNeeded.includes("Show")) Show({ inTablesCollection, inTo });
    if (inEndPointsNeeded.includes("Create")) Create({ inTablesCollection, inTo, inConfigJson });

    // Create({ inTablesCollection, inTo, inConfigJson });
    // Alter({ inTablesCollection, inTo, inConfigJson });
    // Upload({ inTablesCollection, inTo, inConfigJson });
    // Images({ inTablesCollection, inTo, inConfigJson });
    // Search({ inTablesCollection, inTo });
    // Bulk({ inTablesCollection, inTo, inConfigJson });
    // ShowWithColumns({ inTablesCollection, inTo });
    // Sort({ inTablesCollection, inTo });
    // SubTable({ inTablesCollection, inTo, inConfigJson });
};

export { StartFunc };