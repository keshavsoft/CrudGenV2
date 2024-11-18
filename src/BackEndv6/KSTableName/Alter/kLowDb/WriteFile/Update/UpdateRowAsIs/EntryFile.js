import { StartFunc as StartFuncPullData } from "../../../PullData/EntryFile.js";

let StartFunc = async ({ inDataToUpdate, inId }) => {
  let LocalDataToUpdate = inDataToUpdate;

  let LocalId = parseInt(inId);
  let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

  let LocalStartFuncPullData = StartFuncPullData();

  if (LocalStartFuncPullData === false) {
    LocalReturnData.KReason = LocalStartFuncPullData.KReason;
    return LocalReturnData;
  };

  const db = LocalStartFuncPullData.inDb;
  let LocalarrayOfObjects = db.data;

  const index = LocalarrayOfObjects.findIndex((Obj) => Obj.pk == LocalId);

  if (index !== -1) {
    // Update the row
    LocalarrayOfObjects[index] = { ...LocalarrayOfObjects[index], ...LocalDataToUpdate };
  }

  db.write();

  LocalReturnData.KTF = true;

  return await LocalReturnData;
};

export { StartFunc };
