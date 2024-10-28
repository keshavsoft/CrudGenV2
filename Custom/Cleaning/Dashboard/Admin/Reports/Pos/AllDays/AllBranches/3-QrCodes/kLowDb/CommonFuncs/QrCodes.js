import { StartFunc as PullData } from "../../../../../../../../../../../binV4/QrCodes/Show/kLowDb/PullData/returnAsArray.js";

let CommonFindValue = new Date().toLocaleDateString('en-GB').replace(/\//g, '/');

let StartFunc = () => {
    let LocalQrCodeData = PullData();

    let LocalFilterQr = LocalQrCodeData.filter(e => {
        return new Date(e.BookingData.OrderData.Currentdateandtime).toLocaleDateString('en-GB') == CommonFindValue;
    });

    return LocalFilterQr;
};

export { StartFunc };
