import { StartFunc as all } from '../../kLowDb/ReadFromFile/all.js';
import { StartFunc as toFactory } from '../../kLowDb/ReadFromFile/toFactory.js';

let GetAllFuncs = ({ inBranch }) => {
    return all({ inBranch });
};

let GetInBranchFuncs = ({ inBranch }) => {
    return InBranch({ inBranch });
};

let GetToFactoryFuncs = ({ inBranch }) => {
    return toFactory({ inBranch });
};

let GetFactoryScanFuncs = ({ inBranch }) => {
    return toFactory({ inBranch });
};

let GetFactoryReturnFuncs = ({ inBranch }) => {
    return toFactory({ inBranch });
};

export {
    GetAllFuncs, GetInBranchFuncs, GetToFactoryFuncs, GetFactoryScanFuncs, GetFactoryReturnFuncs
};