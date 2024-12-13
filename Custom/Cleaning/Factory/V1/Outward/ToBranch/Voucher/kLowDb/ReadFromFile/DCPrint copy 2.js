import { StartFunc as QrCodes } from "../../../../../../../../../binV4/QrCodes/CommonPull/kLowDb/PullData/returnAsArray.js";
import { StartFunc as FactoryOut_QrCodeScan } from "../../../../../../../../../binV4/FactoryOut_QrCodeScan/CommonPull/kLowDb/PullData/returnAsArray.js";
import { StartFunc as EntryCancelScan } from "../../../../../../../../../binV4/EntryCancelScan/CommonPull/kLowDb/PullData/returnAsArray.js";

let StartFunc = ({ inId, inFactory, inBranch }) => {
    let LocalId = inId;
    let LocalFactory = inFactory;
    let LocalBranch = inBranch;
    let LocalQrCodes = QrCodes();
    let LocalFactoryScan = FactoryOut_QrCodeScan();
    let LocalEntryCancelScan = EntryCancelScan();
    let LocalFiterDcData = LocalFactoryScan.filter(element => element.VoucherRef == LocalId && element.FactoryName == LocalFactory && element.BranchName === LocalBranch);

    return jfMergeData({ FactoryOut_Qr: LocalFiterDcData, inQr: LocalQrCodes, inEntryCancelQr: LocalEntryCancelScan });
};

const jfMergeData = ({ FactoryOut_Qr, inQr, inEntryCancelQr }) => {
    let ordersMap = {};

    FactoryOut_Qr.forEach(element => {
        element.DateTime = new Date(element?.DateTime).toLocaleDateString('en-GB');
        let LocalQr = inQr.find(qr => qr.pk == element.QrCodeId);

        if (LocalQr) {
            if (!ordersMap[LocalQr.OrderNumber]) {
                ordersMap[LocalQr.OrderNumber] = {
                    OrderNumber: LocalQr.OrderNumber,
                    CustomerName: LocalQr.BookingData.CustomerData.CustomerName,
                    BookingData: new Date(LocalQr.BookingData.OrderData.Currentdateandtime).toLocaleDateString('en-GB'),
                    CustomerMobile: LocalQr.BookingData.CustomerData.CustomerMobile,
                    items: [],
                    EntryCancelQr: []
                };
            }

            ordersMap[LocalQr.OrderNumber].items.push(`${LocalQr.pk}-${LocalQr.ItemName}/${LocalQr.DeliveryDateTime}`);
        }
    });

    inEntryCancelQr.forEach(element => {
        let LocalQr = inQr.find(qr => qr.pk == element.QrCodeId);

        if (LocalQr && ordersMap[LocalQr.OrderNumber]) {
            ordersMap[LocalQr.OrderNumber].EntryCancelQr.push(`${LocalQr.pk}-${LocalQr.ItemName}/${LocalQr.DeliveryDateTime}`);
        }
    });

    return Object.values(ordersMap).map(order => ({
        OrderNumber: order.OrderNumber,
        CustomerName: order.CustomerName,
        BookingData: order.BookingData,
        CustomerMobile: order.CustomerMobile,
        items: `'${order.items.join("', '")}'`,
        EntryCancelQr: `'${order.EntryCancelQr.join("', '")}'`
    }));
};

// Example usage:
console.log(StartFunc({ inId: "1", inFactory: "Vizag", inBranch: "KKD" }));
