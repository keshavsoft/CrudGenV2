import { StartFunc as orders } from './orders.js';
import { StartFunc as BranchScan } from './BranchScan.js';
import { StartFunc as EntryScan } from './EntryScan.js';
import { StartFunc as WashingScan } from './WashingScan.js';
import { StartFunc as PressingScan } from "./PressingScan.js";
import { StartFunc as CompletionScan } from "./CompletionScan.js";
import { StartFunc as PressingRejectScan } from "./PressingRejectScan.js";
import { StartFunc as prepareCollection } from "./prepareCollection.js";

let StartFunc = () => {
    const LocalOrdersArray = orders();

    return LocalOrdersArray;
};

export { StartFunc };
