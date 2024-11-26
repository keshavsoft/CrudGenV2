import { StartFunc as entryFile } from '../../kLowDb/ReadFromFile/entryFile.js';

let GetAllFuncs = () => {
    return entryFile();
};

export {
    GetAllFuncs
};