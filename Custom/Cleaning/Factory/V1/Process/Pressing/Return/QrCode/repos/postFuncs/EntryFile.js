import {
    PostFunc as PostFuncDal
} from '../../dals/postFuncs/EntryFile.js';

let PostFunc = ({ inFactory, inDataInsert, inQrCodeId, inVoucherRef }) => {
    return PostFuncDal({ inFactory, inDataInsert,inQrCodeId, inVoucherRef });
};

export {
    PostFunc
};