import { StartFunc as entryFile } from '../../kLowDb/ReadFromFile/entryFile.js';

let GetAllFuncs = () => {
    return entryFile();
};
let GetAsIsFuncs = () => {
    return entryFile();
};

export {
    GetAllFuncs, GetAsIsFuncs
};