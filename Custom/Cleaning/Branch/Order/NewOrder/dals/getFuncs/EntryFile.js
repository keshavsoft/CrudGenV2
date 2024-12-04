import { StartFunc as MaxRow } from '../../kLowDb/ReadFile/MaxRow.js';

let GetFunc = ({ inBranch }) => {

    let LocalFromLowDb = MaxRow({ inBranch });

    return LocalFromLowDb;
};

export { GetFunc };