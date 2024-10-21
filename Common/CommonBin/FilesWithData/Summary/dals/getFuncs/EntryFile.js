import { StartFunc as StartFuncPullData } from '../../kLowDb/PullData.js';
import { StartFunc as notEmpty } from '../../kLowDb/notEmpty.js';

let GetFunc = () => {
    return StartFuncPullData();
};

let GetNotEmptyFunc = () => {
    return notEmpty();
};

export { GetFunc, GetNotEmptyFunc };