import {
    PostFunc as PostFuncDal
} from '../../dals/postFuncs/EntryFile.js';

let PostFunc = ({ inFactory, inDataInsert,inQrCodeId,inVoucher }) => {
    return PostFuncDal({ inFactory, inDataInsert,inQrCodeId,inVoucher });
};

export {
    PostFunc
};