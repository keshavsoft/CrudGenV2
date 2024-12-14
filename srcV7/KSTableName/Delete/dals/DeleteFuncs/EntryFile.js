import { StartFunc as StartFuncwriteFile } from '../../kLowDb/DeleteFromFile/DeleteRow.js';
import { StartFunc as byPk } from '../../kLowDb/DeleteFromFile/byPk.js';

let DeleteFunc = ({ inId }) => {
    return StartFuncwriteFile({ inId });
};

let ReferenceCheckFunc = ({ inId }) => {
    return StartFuncwriteFile({ inId });
};

let ParamFunc = ({ inId }) => {
    return byPk({ inId });
};

let QueryFunc = ({ inId }) => {
    return StartFuncwriteFile({ inId });
};

export { DeleteFunc, ReferenceCheckFunc, ParamFunc, QueryFunc };