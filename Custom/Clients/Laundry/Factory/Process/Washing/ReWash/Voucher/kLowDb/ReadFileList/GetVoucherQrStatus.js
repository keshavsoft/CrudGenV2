import { StartFunc as WashingScan } from '../CommonFuncs/WashingScan.js';
import { StartFunc as EntryScan } from '../CommonFuncs/EntryScan.js';
import { StartFunc as EntryCancelScan } from '../CommonFuncs/EntryCancelScan.js';

let StartFunc = ({ inFactory }) => {
    // let LocalFindValue = new Date().toLocaleDateString('en-GB').replace(/\//g, '/');
    let LocalFactory = inFactory;

    const EntryScandb = EntryScan();
    EntryScandb.read();

    const WashingScandb = WashingScan();
    WashingScandb.read();

    const EntryCancelScandb = EntryCancelScan();
    EntryCancelScandb.read();


    let LocalFilterEntryScan = EntryScandb.data.filter(e => e.FactoryName === LocalFactory);

    let LocalFilterEntryCancelScan = EntryCancelScandb.data.filter(e => e.FactoryName === LocalFactory);

    let LocalFilrerEntryReturnData = LocalFilterEntryScan.map(loop =>
        LocalFilterEntryCancelScan.filter(element => loop.QrCodeId !== element.QrCodeId)
    );
    let LocalFilterWashingSan = WashingScandb.data.filter(e => e.DCFactory === LocalFactory);

    let jVarLocalTransformedData = jFLocalDateWiseCheckCount({ inFactoryData: LocalFilrerEntryReturnData, inWashingData: LocalFilterWashingSan });
    let LocalArrayReverseData = jVarLocalTransformedData.slice().reverse();

    return LocalArrayReverseData;
};


let jFLocalDateWiseCheckCount = ({ inFactoryData, inWashingData }) => {
    let data1 = inFactoryData;
    let data2 = inWashingData;

    const groupedData = {};

    data1.forEach(item => {
        const date = item.DateTime?.split('T')[0];
        if (!groupedData[date]) {
            groupedData[date] = {
                Date: date,
                data1Count: 0,
                data2Count: 0
            };
        }
        groupedData[date].data1Count += 1;
    });

    data2.forEach(item => {
        const date = item.DateTime?.split('T')[0];
        if (!groupedData[date]) {
            groupedData[date] = {
                Date: date,
                data1Count: 0,
                data2Count: 0
            };
        }
        groupedData[date].data2Count += 1;
    });

    return Object.values(groupedData);
};

export { StartFunc };
// StartFunc({ inFactory: "Vizag" });
