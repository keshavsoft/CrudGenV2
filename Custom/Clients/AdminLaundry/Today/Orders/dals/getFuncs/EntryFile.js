import { StartFunc as PullData } from '../../kLowDb/PullData/EntryFile.js';

let GetFunc = () => {
    let LocalFromLowDb = PullData();

    return LocalFromLowDb;
};

export { GetFunc };