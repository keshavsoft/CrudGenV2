import { StartFunc as ReturnDbObject } from '../CommonFuncs/FromApiWrite/ReturnDbObject.js';
import { StartFunc as BranchScan } from '../CommonFuncs/FromApi/BranchScan.js';
import { StartFunc as EntryScan } from '../CommonFuncs/FromApi/entryScan.js';

let StartFunc = ({ inId }) => {
    let LocalId = parseInt(inId);
    let LocalBranchScan = BranchScan();
    let LocalEntryScan = EntryScan();

    const LocalBranchScanFindId = LocalBranchScan.find((obj) => obj.VoucherRef == LocalId);

    if (LocalBranchScanFindId !== undefined) {
        return { KTF: false, KReason: `Id : ${LocalId} found in BranchScan data` };
    };

    const LocalEntryScanFind = LocalEntryScan.find((obj) => obj.VoucherRef == LocalId);

    if (LocalEntryScanFind !== undefined) {
        return { KTF: false, KReason: `Id : ${LocalId} found in FactoryScan data` };
    };

    const db = ReturnDbObject({ inFileName: "BranchDC.json" });
    db.read();
    let LocalarrayOfObjects = db.data;

    const LocalFindId = LocalarrayOfObjects.find((obj) => obj.pk === LocalId);

    if (LocalFindId === undefined) {
        return { KTF: false, KReason: `Id : ${LocalId} not found in data` };
    };

    let LocalArrayAfterDelete = deleteObjectById({
        inCollection: LocalarrayOfObjects,
        inId: LocalId,
    });

    db.data = LocalArrayAfterDelete;
    db.write();

    return true;
};

let deleteObjectById = ({ inCollection, inId }) => {
    let LocalCollection = inCollection;
    let LocalId = inId;

    LocalCollection.splice(
        LocalCollection.findIndex((a) => a.pk === LocalId),
        1
    );

    return LocalCollection;
};


export { StartFunc };
