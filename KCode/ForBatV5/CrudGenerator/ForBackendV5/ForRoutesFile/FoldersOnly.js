import { StartFunc as StartFuncCopyFolders } from './FoldersOnly/InsideFiles/CopyFolders.js';

let StartFunc = ({ inTablesCollection, inFrom, inTo, inEndPointsNeeded }) => {
   StartFuncCopyFolders({ inTablesCollection, inFrom, inTo, inEndPointsNeeded });
};

export { StartFunc };
