import { PostFunc as PostFuncRepo } from '../../repos/postFuncs/EntryFile.js';

let PostFunc = (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch;
    let LocalBody = req.body;
    let LocalQrCodeId = LocalBody.QrCodeId;
    let LocalVoucherRef = LocalBody.VoucherRef;

    let LocalFromRepo = PostFuncRepo({
        inBranch: LocalBranch,
        inPostBody: LocalBody,
        inQrCodeId: LocalQrCodeId,
        inVoucherRef: LocalVoucherRef
    });

    if (LocalFromRepo.KTF === false) {
        return res.status(400).json(LocalFromRepo);
    }

    return res.status(200).json(LocalFromRepo);
};

export { PostFunc };
