import { PostFunc as PostFuncRepo } from '../../repos/postFuncs/EntryFile.js';

let PostFunc = (req, res) => {
    let LocalParams = req.params;
    let LocalFactory = LocalParams.inFactory;
    let LocalBody = req.body;

    let LocalFromRepo = PostFuncRepo({ inFactory: LocalFactory, inDataInsert: LocalBody });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo.JsonData);

    // res.json(LocalFromRepo);
};

export { PostFunc };