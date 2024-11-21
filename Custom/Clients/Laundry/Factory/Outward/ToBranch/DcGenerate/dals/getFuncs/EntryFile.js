import { StartFunc as Generate } from '../../kLowDb/Generate/QrCode.js';

let GetIdFunc = ({ inId,inFactory }) => {
    let LocalFromLowDb = Generate({ inId,inFactory });

    return LocalFromLowDb;
};

export { GetIdFunc };