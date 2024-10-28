import { StartFunc as buildData } from '../../../CommonFuncs/buildData.js';

let StartFunc = () => {
    const LocalQrCodeData = buildData();
console.log("aaaaaaa : ", LocalQrCodeData);

    let LocalArrayReverseData = LocalQrCodeData.slice().reverse();

    return LocalArrayReverseData;
};

export { StartFunc };
