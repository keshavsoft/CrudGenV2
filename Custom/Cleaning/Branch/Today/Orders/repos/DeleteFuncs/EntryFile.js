import {
    deleteFunc as deleteFuncDal

} from '../../dals/DeleteFuncs/EntryFile.js';

let deleteFunc = async ({ inBranch, inId }) => {
    return deleteFuncDal({ inBranch, inId });
};

export { deleteFunc };