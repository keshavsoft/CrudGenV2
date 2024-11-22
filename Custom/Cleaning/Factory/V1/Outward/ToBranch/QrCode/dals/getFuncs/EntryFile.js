import { StartFunc as ToBranchQr } from '../../kLowDb/ReadFromFile/ToBranchQr.js';

let GetIdFunc = ({ inId: LocalId, inBranchName: LocalBranchName }) => {
    let LocalFromLowDb = ToBranchQr({ inId: LocalId, inBranchName: LocalBranchName });

    return LocalFromLowDb;
};

export { GetIdFunc };