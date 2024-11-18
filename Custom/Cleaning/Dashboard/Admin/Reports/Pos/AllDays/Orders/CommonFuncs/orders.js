import { StartFunc as KKD } from "../../../../../../../../../binV4/KKD/CommonPull/kLowDb/PullData/returnAsArray.js";
import { StartFunc as ANR } from "../../../../../../../../../binV4/ANR/CommonPull/kLowDb/PullData/returnAsArray.js";
import { StartFunc as CSO } from "../../../../../../../../../binV4/CSO/CommonPull/kLowDb/PullData/returnAsArray.js";
import { StartFunc as GD } from "../../../../../../../../../binV4/GD/CommonPull/kLowDb/PullData/returnAsArray.js";
import { StartFunc as GWK } from "../../../../../../../../../binV4/GWK/CommonPull/kLowDb/PullData/returnAsArray.js";
import { StartFunc as KPA } from "../../../../../../../../../binV4/KPA/CommonPull/kLowDb/PullData/returnAsArray.js";
import { StartFunc as LBC } from "../../../../../../../../../binV4/LBC/CommonPull/kLowDb/PullData/returnAsArray.js";
import { StartFunc as MSNvzm } from "../../../../../../../../../binV4/MSNvzm/CommonPull/kLowDb/PullData/returnAsArray.js";
import { StartFunc as MVP } from "../../../../../../../../../binV4/MVP/CommonPull/kLowDb/PullData/returnAsArray.js";
import { StartFunc as NGGOS } from "../../../../../../../../../binV4/NGGOS/CommonPull/kLowDb/PullData/returnAsArray.js";
import { StartFunc as PBS } from "../../../../../../../../../binV4/PBS/CommonPull/kLowDb/PullData/returnAsArray.js";
import { StartFunc as RandB } from "../../../../../../../../../binV4/RandB/CommonPull/kLowDb/PullData/returnAsArray.js";
// import { StartFunc as RandBVzm } from "../../../../../../../../../binV4/RandBVzm/CommonPull/kLowDb/PullData/returnAsArray.js";
import { StartFunc as SP } from "../../../../../../../../../binV4/SP/CommonPull/kLowDb/PullData/returnAsArray.js";
// import { StartFunc as VG } from "../../../../../../../../../binV4/VG/CommonPull/kLowDb/PullData/returnAsArray.js";
import { StartFunc as VUDA } from "../../../../../../../../../binV4/VUDA/CommonPull/kLowDb/PullData/returnAsArray.js";
import { StartFunc as VZM } from "../../../../../../../../../binV4/VZM/CommonPull/kLowDb/PullData/returnAsArray.js";
import { StartFunc as YD } from "../../../../../../../../../binV4/YD/CommonPull/kLowDb/PullData/returnAsArray.js";

let StartFunc = () => {
    let LocalkkdData = KKD();
    let LocalanrData = ANR();
    let LocalcsoData = CSO();
    let LocalgdData = GD();
    let LocalgwkData = GWK();
    let LocalkpaData = KPA();
    let LocallbcData = LBC();
    let LocalmsnVzmData = MSNvzm();
    let LocalmvpData = MVP();
    let LocalnggosData = NGGOS();
    let LocalpbsData = PBS();
    let LocalrandBData = RandB();
    // let LocalrandBVzmData = RandBVzm();
    let LocalspData = SP();
    // let LocalvgData = VG();
    let LocalvudaData = VUDA();
    let LocalvzmData = VZM();
    let LocalydData = YD();

    let LocalQrCodeData = [
        ...LocalkkdData,
        ...LocalanrData,
        ...LocalcsoData,
        ...LocalgdData,
        ...LocalgwkData,
        ...LocalkpaData,
        ...LocallbcData,
        ...LocalmsnVzmData,
        ...LocalmvpData,
        ...LocalnggosData,
        ...LocalpbsData,
        ...LocalrandBData,
        // ...LocalrandBVzmData,
        ...LocalspData,
        // ...LocalvgData,
        ...LocalvudaData,
        ...LocalvzmData,
        ...LocalydData,
    ];

    return LocalQrCodeData;
};

export { StartFunc };
