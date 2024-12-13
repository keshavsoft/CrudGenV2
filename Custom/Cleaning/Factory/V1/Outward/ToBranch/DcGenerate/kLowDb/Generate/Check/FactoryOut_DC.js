import { StartFunc as FactoryOut_DC } from '../../CommonFuncs/FactoryOut_DC.js';

const StartFunc = ({ inId }) => {
    let LocalId = inId;

    let LocalReturnData = { KTF: false };
    const dbForQrCodes = FactoryOut_DC();

    let LocalRowNeeded = dbForQrCodes.find(e => e.RefDC == LocalId);

    if (LocalRowNeeded !== undefined) {
        LocalReturnData.KReason = `Already Generated ${LocalId}`;
        return LocalReturnData;
    };
    LocalReturnData.KTF = true;

    return LocalReturnData;
};
export { StartFunc };