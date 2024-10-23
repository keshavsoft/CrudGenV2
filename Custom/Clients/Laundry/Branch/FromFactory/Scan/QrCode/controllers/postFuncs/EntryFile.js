import { PostFunc as PostFuncRepo } from '../../repos/postFuncs/EntryFile.js';

let PostFunc = (req, res) => {
    let LocalParams = req.params;
    let LocalFactory = LocalParams.inBranch;
    let LocalBody = req.body;

    let LocalFromRepo = PostFuncRepo({ inBranch: LocalFactory, inDataInsert: LocalBody });
    res.json(LocalFromRepo);

};


export { PostFunc };