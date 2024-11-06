import { StartFunc as DeleteById } from '../../kLowDb/DeleteFromFiles/DeleteById.js';

let DeleteFuncs = ({ inId }) => {
    return DeleteById({ inId });
};

export {
    DeleteFuncs
};