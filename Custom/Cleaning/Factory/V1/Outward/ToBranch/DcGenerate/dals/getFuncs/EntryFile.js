import { StartFunc as Generate } from '../../kLowDb/Generate/QrCode.js';

let GetIdFunc = ({ inId }) => {
    let LocalFromLowDb = Generate({ inId });

    return LocalFromLowDb;
};

export { GetIdFunc };