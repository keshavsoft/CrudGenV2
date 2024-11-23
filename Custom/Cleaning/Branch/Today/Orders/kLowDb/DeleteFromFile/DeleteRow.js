import { StartFunc as StartFuncPullData } from "../CommonFuncs/ReturnDb.js";

let StartFunc = async ({ inBranch, inId }) => {
  let LocalId = parseInt(inId);
  let LocalBranch = inBranch;

  let LocalStartFuncPullData = StartFuncPullData(LocalBranch);

  const db = LocalStartFuncPullData;
  let LocalarrayOfObjects = db.data;

  const LocalFindId = LocalarrayOfObjects.find((obj) => obj.pk === LocalId);

  if (LocalFindId === undefined) {
    return await { KTF: false, KReason: `Id : ${LocalId} not found in data` };
  };

  if (Object.values(LocalFindId.CheckOutData).length > 0) {
    return await { KTF: false, KReason: `Id : ${LocalId} Settelement  Done` };
  };

  let LocalArrayAfterDelete = deleteObjectById({
    inCollection: LocalarrayOfObjects,
    inId: LocalId,
  });

  db.data = LocalArrayAfterDelete;
  db.write();

  return await true;
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
