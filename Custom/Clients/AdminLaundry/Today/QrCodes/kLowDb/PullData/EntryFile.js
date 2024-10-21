import { StartFunc as QrCodes } from '../CommonFuncs/QrCodes.js';

let StartFunc = () => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    LocalReturnData.KTF = true;
    LocalReturnData.JsonData = QrCodes();

    return LocalReturnData;
};

export { StartFunc };