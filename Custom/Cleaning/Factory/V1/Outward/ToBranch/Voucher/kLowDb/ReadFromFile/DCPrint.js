import { StartFunc as QrCodes } from "../../../../../../../../../binV4/QrCodes/CommonPull/kLowDb/PullData/returnAsArray.js";
import { StartFunc as FactoryOut_QrCodeScan } from "../../../../../../../../../binV4/FactoryOut_QrCodeScan/CommonPull/kLowDb/PullData/returnAsArray.js";
import { StartFunc as EntryCancelScan } from "../../../../../../../../../binV4/EntryCancelScan/CommonPull/kLowDb/PullData/returnAsArray.js";

const StartFunc = ({ inId, inFactory, inBranch }) => {
    const qrCodes = QrCodes();
    const factoryScans = FactoryOut_QrCodeScan();
    const entryCancelScans = EntryCancelScan() || []; // Ensure it defaults to an empty array

    const filteredScans = factoryScans.filter(
        scan => scan.VoucherRef === inId && scan.FactoryName === inFactory && scan.BranchName === inBranch
    );

    return mergeData({ filteredScans, qrCodes, entryCancelScans });
};


const mergeData = ({ filteredScans, qrCodes, entryCancelScans }) => {
    const orders = {};

    // Populate orders from factory scans
    filteredScans.forEach(scan => {
        const qr = qrCodes.find(qr => qr.pk === scan.QrCodeId);
        if (qr) {
            const orderNumber = qr.OrderNumber;
            if (!orders[orderNumber]) {
                orders[orderNumber] = {
                    OrderNumber: orderNumber,
                    CustomerName: qr.BookingData.CustomerData.CustomerName,
                    BookingData: new Date(qr.BookingData.OrderData.Currentdateandtime).toLocaleDateString('en-GB'),
                    CustomerMobile: qr.BookingData.CustomerData.CustomerMobile,
                    items: [],
                    EntryCancelQr: []
                };
            }
            orders[orderNumber].items.push(`${qr.pk}-${qr.ItemName}/${qr.DeliveryDateTime}`);
        }
    });

    // Add entry cancel data
    entryCancelScans.forEach(scan => {
        const qr = qrCodes.find(qr => qr.pk === scan.QrCodeId);
        if (qr && orders[qr.OrderNumber]) {
            orders[qr.OrderNumber].EntryCancelQr.push(`${qr.pk}-${qr.ItemName}/${qr.DeliveryDateTime}`);
        }
    });

    // Transform orders into the desired output format
    return Object.values(orders).map(order => ({
        ...order,
        items: `'${order.items.join("', '")}'`,
        EntryCancelQr: `'${order.EntryCancelQr.join("', '")}'`
    }));
};

// Example usage
console.log(StartFunc({ inId: "1", inFactory: "Vizag", inBranch: "KKD" }));
