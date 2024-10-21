import {
    GetFunc as GetFuncDal,
    GetAsObjectFunc as GetAsObjectFuncDal,
    GetAsArrayFunc as GetAsArrayFuncDal,
    GetAsArrayAsIntFunc as GetAsArrayAsIntFuncDal
}
    from '../../dals/getFuncs/EntryFile.js';

let GetFunc = ({ inFilterObject }) => {
    return GetFuncDal({ inFilterObject });
};

let GetAsObjectFunc = ({ inFilterObject }) => {
    return GetAsObjectFuncDal({ inFilterObject });
};

let GetAsArrayFunc = ({ inKey, inValue }) => {
    return GetAsArrayFuncDal({
        inKey, inValue
    });
};

let GetAsArrayAsIntFunc = ({ inKey, inValue }) => {
    return GetAsArrayAsIntFuncDal({
        inKey, inValue
    });
};

export {
    GetFunc, GetAsObjectFunc, GetAsArrayFunc,
    GetAsArrayAsIntFunc
};