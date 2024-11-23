import { StartFunc as DeleteRow } from '../../kLowDb/DeleteFromFile/DeleteRow.js';

let deleteFunc = ({ inBranch, inId }) => {
    let LocalFromLowDb = DeleteRow({ inBranch, inId });

    return LocalFromLowDb;
};

export { deleteFunc };