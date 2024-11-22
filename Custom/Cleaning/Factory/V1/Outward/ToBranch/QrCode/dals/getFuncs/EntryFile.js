import { StartFunc as Generate } from '../../kLowDb/Generate/QrCode.js';

let GetIdFunc = ({ inId: LocalId, inBranchName: LocalBranchName }) => {
    let LocalFromLowDb = Generate({ inId: LocalId, inBranchName: LocalBranchName });

    return LocalFromLowDb;
};

export { GetIdFunc };