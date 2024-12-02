import {
    PostFunc as PostFuncDal
} from '../../dals/postFuncs/EntryFile.js';

let PostFunc = ({ inFactory, inDataInsert,inVoucherRef,inQrCodeId }) => {
    return PostFuncDal({ inFactory, inDataInsert ,inVoucherRef,inQrCodeId});
};

export {
    PostFunc
};