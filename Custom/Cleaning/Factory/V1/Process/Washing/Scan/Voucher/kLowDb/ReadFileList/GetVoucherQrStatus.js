import { StartFunc as WashingScan } from '../CommonFuncs/WashingScan.js';
import { StartFunc as EntryScan } from '../CommonFuncs/EntryScan.js';
import { StartFunc as EntryCancelScan } from '../CommonFuncs/EntryCancelScan.js';
import { StartFunc as WashingCancelScan } from '../CommonFuncs/WashingCancelScan.js';
import { StartFunc as ReWashScan } from '../CommonFuncs/ReWashScan.js';

let StartFunc = ({ inFactory }) => {
    // let LocalFindValue = new Date().toLocaleDateString('en-GB').replace(/\//g, '/');
    let LocalFactory = inFactory;

    const EntryScandb = EntryScan();
    EntryScandb.read();

    const WashingScandb = WashingScan();
    WashingScandb.read();

    const EntryCancelScandb = EntryCancelScan();
    EntryCancelScandb.read();

    const WashingCancelScandb = WashingCancelScan();
    WashingCancelScandb.read();

    const ReWashScandb = ReWashScan();
    ReWashScandb.read();


    let LocalFilterEntryScan = EntryScandb.data.filter(e => e.FactoryName === LocalFactory);
    let LocalFilterEntryCancelScan = EntryCancelScandb.data.filter(e => e.FactoryName === LocalFactory);
    let LocalFilterWashingCancelScan = WashingCancelScandb.data.filter(e => e.FactoryName === LocalFactory);

    let LocalFilrerEntryReturnData = LocalFilterEntryScan.filter(loop =>
        !LocalFilterEntryCancelScan.some(element => element.QrCodeId === loop.QrCodeId)
    );
    let LocalFilterWashingSan = WashingScandb.data.filter(e => e.FactoryName === LocalFactory);
    let LocalFilterReWashScan = ReWashScandb.data.filter(e => e.FactoryName === LocalFactory);

    let jVarLocalTransformedData = jFLocalDateWiseCheckCount({
        inFactoryData: LocalFilrerEntryReturnData,
        inWashingData: LocalFilterWashingSan,
        inWashingCancelData: LocalFilterWashingCancelScan,
        inReWashData: LocalFilterReWashScan
    });

    let LocalArrayReverseData = jVarLocalTransformedData.slice().reverse();

    return LocalArrayReverseData;
};


let jFLocalDateWiseCheckCount = ({ inFactoryData, inWashingData, inWashingCancelData, inReWashData }) => {
    let data1 = inFactoryData;
    let data2 = inWashingData;
    let data3 = inWashingCancelData;
    let data4 = inReWashData;

    const groupedData = {};

    data1.forEach(item => {
        // const date = item.DateTime?.split('T')[0];
        const date = new Date(item.DateTime).toLocaleDateString('en-GB');
        if (!groupedData[date]) {
            groupedData[date] = {
                Date: date,
                Sent: 0,
                Receved: 0,
                WashCancel: 0,
                ReWash: 0
            };
        }
        groupedData[date].Sent += 1;
    });

    data2.forEach(item => {
        // const date = item.DateTime?.split('T')[0];
        const date = new Date(item.DateTime).toLocaleDateString('en-GB');

        if (!groupedData[date]) {
            groupedData[date] = {
                Date: date,
                Sent: 0,
                Receved: 0,
                WashCancel: 0,
                ReWash: 0
            };
        }
        groupedData[date].Receved += 1;
    });

    data3.forEach(item => {
        // const date = item.DateTime?.split('T')[0];
        const date = new Date(item.DateTime).toLocaleDateString('en-GB');

        if (!groupedData[date]) {
            groupedData[date] = {
                Date: date,
                Sent: 0,
                Receved: 0,
                WashCancel: 0,
                ReWash: 0

            };
        }
        groupedData[date].WashCancel += 1;
    });

    data4.forEach(item => {
        // const date = item.DateTime?.split('T')[0];
        const date = new Date(item.DateTime).toLocaleDateString('en-GB');

        if (!groupedData[date]) {
            groupedData[date] = {
                Date: date,
                Sent: 0,
                Receved: 0,
                WashCancel: 0,
                ReWash: 0

            };
        }
        groupedData[date].ReWash += 1;
    });

    return Object.values(groupedData);
};

export { StartFunc };
// StartFunc({ inFactory: "Vizag" });
