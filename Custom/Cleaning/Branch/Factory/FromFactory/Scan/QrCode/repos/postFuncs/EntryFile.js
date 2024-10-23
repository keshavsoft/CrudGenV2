import {
    PostFunc as PostFuncDal
} from '../../dals/postFuncs/EntryFile.js';

let PostFunc = ({ inBranch, inDataInsert }) => {
    return PostFuncDal({ inBranch, inDataInsert });
};

export {
    PostFunc
};