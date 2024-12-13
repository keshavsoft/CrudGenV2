import { StartFunc as FactoryOut_DC } from "../../../../../../../../../binV4/FactoryOut_DC/CommonPull/kLowDb/PullData/returnAsArray.js";
import { StartFunc as FactoryOut_QrCodeScan } from "../../../../../../../../../binV4/FactoryOut_QrCodeScan/CommonPull/kLowDb/PullData/returnAsArray.js";

let StartFunc = ({ inId, inFactory, inBranch }) => {
    let LocalId = inId;
    let LocalFactory = inFactory;
    let LocalBranch = inBranch;
    // let LocalFactoryOutDc = FactoryOut_DC();
    let LocalFactoryScan = FactoryOut_QrCodeScan();
    let kk=1
    let LocalFiterDcData = LocalFactoryScan.filter(element => element.VoucherRef == LocalId && element.FactoryName == LocalFactory && element.BranchName === LocalBranch);
    const result = LocalFiterDcData.reduce((acc, item) => { if (!acc[item.OrderNumber]) { acc[item.OrderNumber] = { OrderNumber: item.OrderNumber, items: [] }; } acc[item.OrderNumber].items.push({ ItemName: item.ItemName, QrCodeId: item.QrCodeId }); return acc; }, {});
    console.log("pp:", result);
    console.log("result:", result[kk].items);
    // return jfMergeData({ inQr: LocalFiterDcData });
};



const jfMergeData = ({ inQr }) => {
    return inQr.map(element => {

        element.DateTime = new Date(element?.DateTime).toLocaleDateString('en-GB'); // dd/mm/yyyy format
        element.QrCount = inQr.filter(qr => qr.RefDC == element.VoucherRef && qr.BranchName == element.BranchName).length;
        return element;
    });

}

// export { StartFunc };
StartFunc({ inId: "1", inFactory: "Vizag", inBranch: "KKD" })
