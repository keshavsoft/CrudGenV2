import { GetFunc as GetFuncDal } from '../../dals/getFuncs/EntryFile.js';

let GetFunc = ({ inBranch }) => {
    return GetFuncDal({ inBranch });
};

export { GetFunc };