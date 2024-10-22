import {
    GetQrFuncs as GetQrFuncsDal,
    GetAsIsFuncs as GetAsIsFuncsDal
} from '../../dals/GetFuncs/EntryFile.js';

let GetQrFuncs = ({ inQr }) => {
    return GetQrFuncsDal({ inQr });
};

let GetAsIsFuncs = () => {
    return GetAsIsFuncsDal();
};

export {
    GetQrFuncs, GetAsIsFuncs
};