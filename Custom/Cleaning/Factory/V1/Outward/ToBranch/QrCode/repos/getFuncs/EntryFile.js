import { GetIdFunc as GetIdFuncDal } from '../../dals/getFuncs/EntryFile.js';

let GetIdFunc = ({ inId: LocalId, inBranchName: LocalBranchName }) => {
    return GetIdFuncDal({ inId: LocalId, inBranchName: LocalBranchName });
};

export { GetIdFunc };