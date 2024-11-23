import { StartFunc as GeneretedDC } from '../../kLowDb/ReadFromFile/GeneretedDC.js';

let GetIdFunc = ({ inId: LocalId }) => {
    let LocalFromLowDb = GeneretedDC({ inId: LocalId });

    return LocalFromLowDb;
};

export { GetIdFunc };