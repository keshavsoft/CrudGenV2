import { StartFunc as BulkInsert } from "../../../../../../../../../binV4/FactoryOut_QrCodeScan/Bulk/kLowDb/WriteTofile/BulkInsert/EntryFile.js";

let StartFunc = ({ inBulkData }) => {
    let LocalBulk = inBulkData;

    BulkInsert({ inArrayFromRequest: LocalBulk });

    return true;
};

export { StartFunc };
