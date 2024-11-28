import { PostFunc as PostFuncRepo } from '../../repos/postFuncs/EntryFile.js';

let PostFunc = (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch;
    let LocalBody = req.body;
    let LocalQrCode = LocalBody.LocalQrCodeId;
    let LocalVoucher = LocalBody.VoucherRef;

    let LocalFromRepo = PostFuncRepo({ inFactory: LocalBranch, inDataInsert: LocalBody,inVoucher:LocalVoucher,inQrCodeId:LocalQrCode });
    res.json(LocalFromRepo);

};


export { PostFunc };