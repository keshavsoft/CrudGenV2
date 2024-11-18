import { StartFunc as StartFuncPullData } from "../PullData/EntryFile.js";

let StartFunc = ({ inFilterKey, inFilterValue }) => {
  let LocalinKey = inFilterKey;
  let LocalValue = inFilterValue;

  let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };


  let LocalStartFuncPullData = StartFuncPullData();

  if (LocalStartFuncPullData.KTF === false) {
    LocalReturnData.KReason = LocalStartFuncPullData.KReason;
    return LocalReturnData;
  };

  const db = LocalStartFuncPullData.inDb;
  let LocalarrayOfObjects = db.data;
  let LocalFindId = LocalarrayOfObjects.filter(e => e[LocalinKey] == LocalValue);

  if (LocalFindId.length === 0) {
    LocalReturnData.KReason = "No Data"
    return LocalReturnData;
  };

  LocalReturnData.KTF = true;
  LocalReturnData.JsonData = LocalFindId;

  return  LocalReturnData;
};

export { StartFunc };
