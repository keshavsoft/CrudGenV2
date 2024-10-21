import {
    GetFunc as GetFuncDal, GetMaxRowFunc as GetMaxRowFuncDal
} from '../../dals/getFuncs/EntryFile.js';

let GetFunc = ({ inFilterObject }) => {
    return GetFuncDal({ inFilterObject });
};

let GetMaxRowFunc = () => {
    return GetMaxRowFuncDal();
};

export {
    GetFunc, GetMaxRowFunc
};