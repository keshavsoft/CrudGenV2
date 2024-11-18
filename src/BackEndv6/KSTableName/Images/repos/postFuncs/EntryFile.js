import {
    GetWithDataFunc as GetWithDataFuncDal
} from '../../dals/postFuncs/EntryFile.js';

let GetWithDataFunc = async () => {
    return GetWithDataFuncDal();
};

export {
    GetWithDataFunc
};