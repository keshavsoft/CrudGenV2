import { StartFunc as StartFuncPullData } from "../../PullData/EntryFile.js";

let StartFunc = () => {
  let LocalReturnData = { KTF: false };

  let LocalStartFuncPullData = StartFuncPullData();

  if ("error" in LocalStartFuncPullData) {
    LocalReturnData.KReason = LocalStartFuncPullData.error;
    return LocalReturnData;
  };

  const LocalPkArray1 = LocalStartFuncPullData.map(element => {
    return Number.isInteger(element.pk) ? element.pk : parseInt(element.pk);
  });

  const LocalPkArray = LocalStartFuncPullData.map(element => {
    return element.pk;
  });

  let numberArray = LocalPkArray.map(Number);

  let LocalMax = Math.max(...numberArray, 0);

  const LocalMaxRow = LocalStartFuncPullData.find(element => {
    return element.pk === LocalMax;
  });

  LocalReturnData.KTF = true;
  LocalReturnData.JsonData = LocalMaxRow;

  return LocalReturnData;
};

export { StartFunc };
