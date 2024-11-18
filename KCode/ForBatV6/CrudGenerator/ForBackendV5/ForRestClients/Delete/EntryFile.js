import { StartFunc as DeleteEndPoints } from "./DeleteEndPoints/EntryFile.js";

let StartFunc = ({ inTablesCollection, inTo, inConfigJson }) => {
    DeleteEndPoints({ inTablesCollection, inTo, inConfigJson });
};

export { StartFunc };