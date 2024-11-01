import { StartFunc as StartFuncUpdateRow } from '../../kLowDb/WriteFile/Update/UpdateRow/EntryFile.js';
import { StartFunc as UpdateRowAsIs } from '../../kLowDb/WriteFile/Update/UpdateRowAsIs/EntryFile.js';

let PutFunc = ({ inDataToUpdate, inId }) => {
    return StartFuncUpdateRow({ inDataToUpdate, inId });
};

let PutAsIsFunc = ({ inDataToUpdate, inId }) => {
    return UpdateRowAsIs({ inDataToUpdate, inId });
};

export {
    PutFunc, PutAsIsFunc
};