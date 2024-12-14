import { StartFunc as ApplyFilter } from '../../kLowDb/ReadFromFile/ApplyFilter/getFunc.js';
import { StartFunc as AsObject } from "../../kLowDb/ReadFromFile/ApplyFilter/AsObject.js";
import { StartFunc as AsArray } from '../../kLowDb/ReadFromFile/ApplyFilter/AsArray.js';
import { StartFunc as asArrayAsInt } from '../../kLowDb/ReadFromFile/ApplyFilter/asArrayAsInt.js';

let GetFunc = ({ inFilterObject }) => {
    let LocalFromLowDb = ApplyFilter({ inFilterObject });

    return LocalFromLowDb;
};

let GetAsObjectFunc = ({ inFilterObject }) => {
    let LocalFromLowDb = AsObject({ inFilterObject });

    return LocalFromLowDb;
};

let GetAsArrayFunc = ({ inKey, inValue }) => {
    let LocalFromLowDb = AsArray({ inKey, inValue });

    return LocalFromLowDb;
};

let GetAsArrayAsIntFunc = ({ inKey, inValue }) => {
    let LocalFromLowDb = asArrayAsInt({ inKey, inValue });

    return LocalFromLowDb;
};

export {
    GetFunc, GetAsObjectFunc, GetAsArrayFunc, GetAsArrayAsIntFunc
};