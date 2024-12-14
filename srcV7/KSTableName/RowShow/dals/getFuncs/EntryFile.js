import { StartFunc as getRowFunc } from '../../kLowDb/ReadFromFile/getRowFunc.js';



let GetRowDataFunc = ({ inId }) => {
    let LocalFromLowDb = getRowFunc({ inId });

    if (LocalFromLowDb.KTF === false) {
        return LocalFromLowDb;
    };

    return LocalFromLowDb.JsonData;
};


export {
    GetRowDataFunc
};