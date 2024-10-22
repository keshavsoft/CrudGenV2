// import { StartFunc as buildData } from '../../../CommonFuncs/buildData.js';
import { StartFunc as buildData } from '../CommonFuncs/buildData.js';

let StartFunc = ({ inQr }) => {
    let LocalArrayReverseData = buildData({ inQr });

    return LocalArrayReverseData;
};

export { StartFunc };
