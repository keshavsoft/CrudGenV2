import { PostFunc as PostFuncRepo } from '../../repos/postFuncs/EntryFile.js';

let PostFunc = (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch;
    let LocalBody = req.body;

    let LocalFromRepo = PostFuncRepo({ inFactory: LocalBranch, inDataInsert: LocalBody });
    res.json(LocalFromRepo);

};


export { PostFunc };