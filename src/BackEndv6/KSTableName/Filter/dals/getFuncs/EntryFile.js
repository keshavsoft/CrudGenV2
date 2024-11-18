import { StartFunc as ApplyFilter } from '../../kLowDb/ReadFromFile/ApplyFilter/getFunc.js';
import { StartFunc as maxRow } from '../../kLowDb/ReadFromFile/ApplyFilter/maxRow.js';

let GetFunc = ({ inFilterObject }) => {
    let LocalFromLowDb = ApplyFilter({ inFilterObject });

    return LocalFromLowDb;
};

let GetMaxRowFunc = () => {
    let LocalFromLowDb = maxRow();

    return LocalFromLowDb;
};

export {
    GetFunc, GetMaxRowFunc
};