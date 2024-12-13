import { GetIdFunc as GetIdFuncDal } from '../../dals/getFuncs/EntryFile.js';

let GetIdFunc = ({ inId, inFactory }) => {
    return GetIdFuncDal({ inId, inFactory });
};

export { GetIdFunc };