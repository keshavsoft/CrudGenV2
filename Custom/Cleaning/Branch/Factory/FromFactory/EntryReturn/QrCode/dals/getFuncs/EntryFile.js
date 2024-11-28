// import HomeJson from './home.json' with {type: 'json'};
import { StartFunc as GetRowDataById } from '../../kLowDb/ReadFileList/GetRowDataById.js';
import { StartFunc as GetRowQrDataById } from '../../kLowDb/ReadFileList/GetRowQrDataById.js';
import { StartFunc as GetFromFactoryDcWiseItemsById } from '../../kLowDb/ReadFileList/GetFromFactoryDcWiseItemsById.js';
import { StartFunc as GetToScanPendingById } from '../../kLowDb/ReadFileList/GetToScanPendingById.js';

let GetRowDataFunc = ({ inBranch, inId }) => {
    let LocalFromLowDb = GetRowDataById({ inBranch, inId });

    return LocalFromLowDb;
};

let GetRowQrDataFunc = ({ inId }) => {
    let LocalFromLowDb = GetRowQrDataById({ inId });

    return LocalFromLowDb;
};

let GetFromFactoryDcWiseItems = ({ inBranch, inId }) => {
    let LocalFromLowDb = GetFromFactoryDcWiseItemsById({ inBranch, inId });

    return LocalFromLowDb;
};

let GetToScanPendingFunc = ({ inBranch, inId }) => {
    let LocalFromLowDb = GetToScanPendingById({ inBranch, inId });

    return LocalFromLowDb;
};
export {
    GetRowDataFunc, GetRowQrDataFunc, GetFromFactoryDcWiseItems, GetToScanPendingFunc
};