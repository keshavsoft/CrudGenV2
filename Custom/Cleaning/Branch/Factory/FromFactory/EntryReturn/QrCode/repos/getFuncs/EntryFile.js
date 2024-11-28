import {
    GetRowDataFunc as GetRowDataFuncDal,
    GetRowQrDataFunc as GetRowQrDataFuncDal,
    GetFromFactoryDcWiseItems as GetFromFactoryDcWiseItemsDal,
    GetToScanPendingFunc as GetToScanPendingFuncDal

} from '../../dals/getFuncs/EntryFile.js';


let GetRowDataFunc = ({ inBranch, inId }) => {
    return GetRowDataFuncDal({ inBranch, inId });
};

let GetRowQrDataFunc = ({ inId }) => {
    return GetRowQrDataFuncDal({ inId });
};

let GetFromFactoryDcWiseItems = ({ inBranch, inId }) => {
    return GetFromFactoryDcWiseItemsDal({ inBranch, inId });
};

let GetToScanPendingFunc = ({ inBranch, inId }) => {
    return GetToScanPendingFuncDal({ inBranch, inId });
};
export {
    GetRowDataFunc, GetRowQrDataFunc, GetFromFactoryDcWiseItems, GetToScanPendingFunc
};