import {
    GetRowDataFunc as GetRowDataFuncRepo
} from '../../repos/getFuncs/EntryFile.js';


let GetRowDataFunc = async (req, res) => {
    let localid = req.params.id
    let LocalFromRepo = await GetRowDataFuncRepo({ inId: localid });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo);
};


export {
  GetRowDataFunc
};