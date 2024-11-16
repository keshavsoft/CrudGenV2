import { StartFunc as StartFuncPullData } from "./PullData/EntryFile.js";
import { StartFunc as StartFuncUniqueKeyCheck } from "./Checks/UniqueKeyCheck.js";
import { StartFunc as checkReferences } from "./Checks/checkReferences.js";
import { StartFunc as LocalFuncGeneratePk } from "./Generate.js";
import { StartFunc as PullDataWashingScan } from "./PullData/WashingScan.js";

let StartFunc = ({ inDataToInsert }) => {
    let LocalinDataToInsert = inDataToInsert;
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };
    let LocalStartFuncPullData = StartFuncPullData();

    if (LocalStartFuncPullData === false) {
        LocalReturnData.KReason = LocalStartFuncPullData.KReason;
        return LocalReturnData;
    };

    const LocalTableSchema = LocalStartFuncPullData.inTableSchema;
    const db = LocalStartFuncPullData.inDb;

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

    LocalFunc({ inDataToInsert })

    db.data.push(LocalDataWithUuid.InsertData);
    db.write();
    LocalReturnData.KTF = true;
    LocalReturnData.ScanNo = LocalDataWithUuid.InsertData.QrCodeId;

    return LocalReturnData;
};

const LocalFunc = ({ inDataToInsert }) => {

    let LocalPullDataWashingScan = PullDataWashingScan();
    const db = LocalPullDataWashingScan.inDb;

    let localFindData = db.data.find(loopQr => loopQr.QrCodeId == inDataToInsert.QrCodeId);
    localFindData.ReWash = true;
    db.write();
};

export { StartFunc };