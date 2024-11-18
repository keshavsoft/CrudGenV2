import { StartFunc as ReadFromFile } from '../../kLowDb/ReadFromFile/getFunc.js';
import { StartFunc as getRowFunc } from '../../kLowDb/ReadFromFile/getRowFunc.js';

let GetFunc = () => {
    let LocalFromLowDb = ReadFromFile();

    return LocalFromLowDb;
};

let GetDataOnlyFunc = ({ inId }) => {
    let LocalFromLowDb = getRowFunc();

    return LocalFromLowDb;
};

export {
    GetFunc, GetDataOnlyFunc
};