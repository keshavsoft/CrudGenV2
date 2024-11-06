import {
    DeleteFuncs as DeleteFuncsDal

} from '../../dals/DeleteFuncs/EntryFile.js';

let DeleteFuncs = ({ inId }) => {
    return DeleteFuncsDal({ inId });
};

export {
    DeleteFuncs
};