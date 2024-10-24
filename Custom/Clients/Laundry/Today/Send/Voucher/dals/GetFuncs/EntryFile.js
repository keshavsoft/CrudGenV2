import { StartFunc as ReadFromFiles } from '../../kLowDb/ReadFromFiles/entryFile.js';

let GetFuncs = ({ inBranch }) => {
    return ReadFromFiles({ inBranch });
};

export {
    GetFuncs
};