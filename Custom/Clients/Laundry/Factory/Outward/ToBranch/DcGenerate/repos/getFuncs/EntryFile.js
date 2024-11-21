import { GetIdFunc as GetIdFuncDal } from '../../dals/getFuncs/EntryFile.js';

let GetIdFunc = async ({ inId,inFactory}) => {
    return GetIdFuncDal({ inId,inFactory });
};

export { GetIdFunc };