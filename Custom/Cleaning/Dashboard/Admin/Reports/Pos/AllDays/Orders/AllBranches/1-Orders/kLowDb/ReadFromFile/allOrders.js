import { StartFunc as buildData } from '../../../../CommonFuncs/buildData.js';

let StartFunc = () => {
    const LocalQrCodeData = buildData();

    let LocalArrayReverseData = LocalQrCodeData.slice().reverse();

    return LocalArrayReverseData;
};

export { StartFunc };
