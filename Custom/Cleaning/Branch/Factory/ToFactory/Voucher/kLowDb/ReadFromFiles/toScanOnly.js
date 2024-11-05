import { StartFunc as CommonFunc } from "./CommonFunc.js";

let StartFunc = ({ inBranch }) => {
    let LocalData = CommonFunc({ inBranch });

    let LocalFilterData = LocalData.filter(element => element.EntryDc === false);
    
    return LocalFilterData;
};

export { StartFunc };
