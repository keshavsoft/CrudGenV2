import { StartFunc as ANR } from '../CommonFuncs/ANR.js';
import { StartFunc as CSO } from '../CommonFuncs/CSO.js';
import { StartFunc as GD } from '../CommonFuncs/GD.js';
import { StartFunc as GWK } from '../CommonFuncs/GWK.js';
import { StartFunc as KKD } from '../CommonFuncs/KKD.js';
import { StartFunc as KPA } from '../CommonFuncs/KPA.js';
import { StartFunc as LBC } from '../CommonFuncs/LBC.js';
import { StartFunc as MSNvzm } from '../CommonFuncs/MSNvzm.js';
import { StartFunc as MVP } from '../CommonFuncs/MVP.js';
import { StartFunc as NGGOS } from '../CommonFuncs/NGGOS.js';
import { StartFunc as PBS } from '../CommonFuncs/PBS.js';
import { StartFunc as RandB } from '../CommonFuncs/RandB.js';
import { StartFunc as RandBVzm } from '../CommonFuncs/RandBVzm.js';
import { StartFunc as SP } from '../CommonFuncs/SP.js';
import { StartFunc as VG } from '../CommonFuncs/VG.js';
import { StartFunc as VUDA } from '../CommonFuncs/VUDA.js';
import { StartFunc as VZM } from '../CommonFuncs/VZM.js';
import { StartFunc as YD } from '../CommonFuncs/YD.js';

let StartFunc = () => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    LocalReturnData.KTF = true;
    LocalReturnData.JsonData = [
        ...ANR(),
        ...CSO(),
        ...GD(),
        ...GWK(),
        ...KKD(),
        ...KPA(),
        ...LBC(),
        ...MSNvzm(),
        ...MVP(),
        ...NGGOS(),
        ...PBS(),
        ...RandB(),
        ...RandBVzm(),
        ...SP(),
        ...VG(),
        ...VUDA(),
        ...VZM(),
        ...YD()

    ];

    return LocalReturnData;
};

export { StartFunc };