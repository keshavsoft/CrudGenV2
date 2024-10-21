import { StartFunc as orders } from './orders.js';

let StartFunc = ({ inBranch }) => {
    let LocalBranchName = inBranch;

    const LocalOrdersData = orders({ inBranch: LocalBranchName });
    LocalOrdersData.read();

    let jVarLocalTransformedData = LocalOrdersData.data;

    return jVarLocalTransformedData;
};

export { StartFunc };
