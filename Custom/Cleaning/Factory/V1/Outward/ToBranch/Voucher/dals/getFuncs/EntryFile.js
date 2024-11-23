import { StartFunc as GeneretedDC } from '../../kLowDb/ReadFromFile/GeneretedDC.js';

let GetIdFunc = ({ inId, inFactory }) => {
    let LocalFromLowDb = GeneretedDC({ inId, inFactory });

    return LocalFromLowDb;
};

export { GetIdFunc };