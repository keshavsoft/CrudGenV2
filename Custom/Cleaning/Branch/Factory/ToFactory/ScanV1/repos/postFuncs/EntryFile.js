import { PostFunc as PostFuncDal } from '../../dals/postFuncs/EntryFile.js';

let PostFunc = ({ inBranch, inPostBody, inQrCodeId, inVoucherRef }) => {
    return PostFuncDal({ inBranch, inPostBody, inQrCodeId, inVoucherRef });
};

export { PostFunc };