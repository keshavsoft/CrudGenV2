// import { StartFunc as StartFuncReturnDbObjectWithSchema } from '../../../../../../../QrCodes/kLowDb/CommonFuncs/EntryScanDbObjectWithSchema.js';
import { StartFunc as StartFuncReturnDbObjectWithSchema } from '../../../../CommonFuncs/ReturnDbObjectWithSchema.js';
let LocalTableName = "WashingScan.json";

let StartFunc = () => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    LocalReturnData.KTF = false;

    const dbFromDbObjectWithSchema = StartFuncReturnDbObjectWithSchema({ inTableName: LocalTableName });

    const db = dbFromDbObjectWithSchema.dbObject;

    db.read();

    if ("error" in db.data) {
        return db.data;
    };

    if (Array.isArray(db.data) === false) {
        LocalReturnData.KReason = "Not array inside Json file...";

        return LocalReturnData;
    };

    LocalReturnData.KTF = true;
    LocalReturnData.inDb = db
    LocalReturnData.inTableSchema = dbFromDbObjectWithSchema.TableSchema

    return LocalReturnData;
};

export { StartFunc };