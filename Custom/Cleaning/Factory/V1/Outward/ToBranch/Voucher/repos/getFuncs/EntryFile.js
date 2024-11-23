import { GetIdFunc as GetIdFuncDal } from '../../dals/getFuncs/EntryFile.js';

let GetIdFunc = ({ inId: LocalId }) => {
    return GetIdFuncDal({ inId: LocalId });
};

export { GetIdFunc };