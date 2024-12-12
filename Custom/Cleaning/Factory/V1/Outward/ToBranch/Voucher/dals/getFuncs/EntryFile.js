import { StartFunc as GeneretedDC } from '../../kLowDb/ReadFromFile/GeneretedDC.js';

let GetIdFunc = ({ inId, inFactory }) => {
    let LocalFromLowDb = GeneretedDC({ inId, inFactory });

    return LocalFromLowDb;
};

let GetPrintFunc = ({ inId, inFactory }) => {
    let LocalFromLowDb = GeneretedDC({ inId, inFactory, inBranch });

    return LocalFromLowDb;
};

export { GetIdFunc, GetPrintFunc };