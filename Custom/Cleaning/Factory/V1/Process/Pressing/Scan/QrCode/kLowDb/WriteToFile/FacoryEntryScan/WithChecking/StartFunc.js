import { StartFunc as StartFuncPullData } from "./PullData/EntryFile.js";
import { StartFunc as StartFuncUniqueKeyCheck } from "./Checks/UniqueKeyCheck.js";
import { StartFunc as checkReferences } from "./Checks/checkReferences.js";
import { StartFunc as CheckAndUpdate } from "./CheckAndUpdate/EntryFile.js";
import { StartFunc as LocalFuncGeneratePk } from "./Generate.js";

let StartFunc = ({ inDataToInsert, inVoucherRef }) => {
    let LocalinDataToInsert = inDataToInsert;
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };
    let LocalStartFuncPullData = StartFuncPullData();

    if (LocalStartFuncPullData.KTF === false) {
        LocalReturnData.KReason = LocalStartFuncPullData.KReason;
        return LocalReturnData;
    };

    const LocalTableSchema = LocalStartFuncPullData.inTableSchema;
    const db = LocalStartFuncPullData.inDb;

    let LocalCheckAndUpdate = CheckAndUpdate({ inDatedb: db, inDataToInsert, inVoucherRef });

    if (LocalCheckAndUpdate.KTF === true) {
        LocalReturnData = { ...LocalCheckAndUpdate }
        return LocalReturnData;
    };

    let LocalFromCheckReferences = checkReferences({
        inTableSchema: LocalTableSchema,
        inDataToInsert: LocalinDataToInsert
    });

    if (LocalFromCheckReferences.KTF === false) {
        LocalReturnData.KReason = LocalFromCheckReferences.KReason;
        return LocalReturnData;
    };

    let LocalStartFuncChecksQrCodeId = StartFuncUniqueKeyCheck({ inData: db.data, inDataToInsert: LocalinDataToInsert, inSchema: LocalTableSchema.fileData });

    if (LocalStartFuncChecksQrCodeId.KTF === false) {
        LocalReturnData.KReason = LocalStartFuncChecksQrCodeId.KReason;
        return LocalReturnData;
    };

    let LocalDataWithUuid = LocalFuncGeneratePk({
        inDataToInsert: LocalinDataToInsert,
        inData: db.data,
        inColumns: LocalTableSchema.fileData
    });

    if (LocalDataWithUuid.KTF === false) {
        LocalReturnData.KReason = LocalDataWithUuid.KReason;
        return LocalReturnData;
    };

    db.data.push(LocalDataWithUuid.InsertData);
    db.write();
    let localFiterData = db.data.filter(el => el.VoucherRef == inVoucherRef).length;
    LocalReturnData.KTF = true;
    LocalReturnData.QrCount = localFiterData;
    LocalReturnData.ScanNo = LocalDataWithUuid.InsertData.QrCodeId;

    return LocalReturnData;
};

export { StartFunc };