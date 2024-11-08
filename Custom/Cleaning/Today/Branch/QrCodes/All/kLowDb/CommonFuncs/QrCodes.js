import { StartFunc as PullData } from "../../../../../../../../binV4/QrCodes/Show/kLowDb/PullData/returnAsArray.js";
let LocalFindValue = new Date().toLocaleDateString('en-GB').replace(/\//g, '/');

let StartFunc = ({ inBranch }) => {
    let LocalBranchName = inBranch;

    let LocalQrCodeOriginalData = PullData();

    let LocalFilteredData = LocalQrCodeOriginalData.filter(e => {
        return new Date(e.BookingData.OrderData.Currentdateandtime).toLocaleDateString('en-GB') == LocalFindValue && e.BookingData.OrderData.BranchName === LocalBranchName;
    });

    return LocalFilteredData;
};

export { StartFunc };
