import { StartFunc as FactoryOut_DC } from "../../../../../../../../../binV4/FactoryOut_DC/CommonPull/kLowDb/PullData/returnAsArray.js";
import { StartFunc as FactoryOut_QrCodeScan } from "../../../../../../../../../binV4/FactoryOut_QrCodeScan/CommonPull/kLowDb/PullData/returnAsArray.js";

let StartFunc = ({ inId, inFactory }) => {
    let LocalId = inId;
    let LocalFactory = inFactory;
    let LocalFactoryOutDc = FactoryOut_DC();
    let LocalFactoryScan = FactoryOut_QrCodeScan();
    let LocalFiterDcData = LocalFactoryOutDc.filter(element => element.RefDC == LocalId && element.FactoryName == LocalFactory);

    return jfMergeData({ inDc: LocalFiterDcData, inQr: LocalFactoryScan });
};

const jfMergeData = ({ inDc, inQr }) => {
    return inDc.map(element => {
        element.DateTime = new Date(element?.DateTime).toLocaleDateString('en-GB'); // dd/mm/yyyy format
        element.QrCount = inQr.filter(qr => qr.RefDC == element.VoucherRef).length;
        return element;
    });

}

export { StartFunc };
