import { StartFunc as ReturnDbObject } from '../CommonFuncs/FromApiWrite/ReturnDbObject.js';

let StartFunc = ({ inId }) => {
    let LocalId = parseInt(inId);

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
