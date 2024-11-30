import { StartFunc as All } from '../../kLowDb/ReadFileList/All.js';
import { StartFunc as Pending } from '../../kLowDb/ReadFileList/Pending.js';
import { StartFunc as Scanned } from '../../kLowDb/ReadFileList/Scanned.js';
import { StartFunc as Returns } from '../../kLowDb/ReadFileList/EntryRetuns.js';
import { StartFunc as GetRowDataById } from '../../kLowDb/ReadFileList/GetRowDataById.js';
import { StartFunc as GetRowQrDataById } from '../../kLowDb/ReadFileList/GetRowQrDataById.js';
import { StartFunc as GetRowCountById } from '../../kLowDb/ReadFileList/GetRowCountById.js';
import { StartFunc as GetFromBranchDcWiseItemsById } from '../../kLowDb/ReadFileList/GetFromBranchDcWiseItemsById.js';
import { StartFunc as GetToScanPendingById } from '../../kLowDb/ReadFileList/GetToScanPendingById.js';
import { StartFunc as GetDCQrReturnById } from '../../kLowDb/ReadFileList/GetDCQrReturnById.js';

// import HomeJson from './home.json' with {type: 'json'};

let GetFunc = ({ inFactory }) => {
    let LocalFromLowDb = All({ inFactory });

    return LocalFromLowDb;
};

let GetPendingFunc = ({ inFactory }) => {
    let LocalFromLowDb = Pending({ inFactory });

    return LocalFromLowDb;
};

let GetScannedFunc = ({ inFactory }) => {
    let LocalFromLowDb = Scanned({ inFactory });

    return LocalFromLowDb;
};

let GetReturnsFunc = ({ inFactory }) => {
    let LocalFromLowDb = Returns({ inFactory });

    return LocalFromLowDb;
};

let GetRowDataFunc = ({ inFactory, inId }) => {
    let LocalFromLowDb = GetRowDataById({ inFactory, inId });

    return LocalFromLowDb;
};

let GetRowQrDataFunc = ({ inId }) => {
    let LocalFromLowDb = GetRowQrDataById({ inId });

    return LocalFromLowDb;
};

let GetRowCountFunc = ({ inBranch, inId }) => {
    let LocalFromLowDb = GetRowCountById({ inFactory: inBranch, inId });

    return LocalFromLowDb;
};

let GetFromBranchDcWiseItemsFunc = ({ inFactory, inId }) => {
    let LocalFromLowDb = GetFromBranchDcWiseItemsById({ inFactory, inId });

    return LocalFromLowDb;
};

let GetToScanPendingFunc = ({ inFactory, inId }) => {
    let LocalFromLowDb = GetToScanPendingById({ inFactory, inId });

    return LocalFromLowDb;
};

let GetDCQrReturnFunc = ({ inFactory, inId }) => {
    let LocalFromLowDb = GetDCQrReturnById({ inFactory, inId });

    return LocalFromLowDb;
};

export {
    GetFunc, GetPendingFunc, GetScannedFunc, GetRowDataFunc, GetReturnsFunc, GetRowQrDataFunc, GetRowCountFunc,
    GetFromBranchDcWiseItemsFunc, GetToScanPendingFunc, GetDCQrReturnFunc
};