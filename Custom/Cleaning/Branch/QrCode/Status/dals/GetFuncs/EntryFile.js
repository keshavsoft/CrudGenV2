import { StartFunc as GetQr } from '../../kLowDb/ReadFromFile/GetQr.js';

let GetQrFuncs = ({ inQr }) => {
    return GetQr({ inQr });
};

let GetAsIsFuncs = () => {
    return TodayAllQrCodes();
};

export {
    GetQrFuncs, GetAsIsFuncs
};