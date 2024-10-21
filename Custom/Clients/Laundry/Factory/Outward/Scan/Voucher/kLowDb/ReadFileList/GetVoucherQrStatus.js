import { StartFunc as PressingScan } from '../CommonFuncs/PressingScan.js';
import { StartFunc as PressingCancelScan } from '../CommonFuncs/PressingCancelScan.js';
import { StartFunc as CompletionScan } from '../CommonFuncs/CompletionScan.js';

let StartFunc = ({ inFactory }) => {
    // let LocalFindValue = new Date().toLocaleDateString('en-GB').replace(/\//g, '/');
    let LocalFactory = inFactory;

    const PressingScandb = PressingScan();
    PressingScandb.read();

    const PressingCancelScandb = PressingCancelScan();
    PressingCancelScandb.read();

    const CompletionScandb = CompletionScan();
    CompletionScandb.read();

    let LocalFilterPressingScan = PressingScandb.data.filter(e => e.FactoryName === LocalFactory);
    let LocalFilterPressingCancelScan = PressingCancelScandb.data.filter(e => e.FactoryName === LocalFactory);
    let LocalFilterCompletionScan = CompletionScandb.data.filter(e => e.FactoryName === LocalFactory);

    let LocalFilrerSend = LocalFilterPressingScan.filter(loop =>
        !LocalFilterPressingCancelScan.some(element => element.QrCodeId === loop.QrCodeId)
    );

    let jVarLocalTransformedData = jFLocalDateWiseCheckCount({
        inSend: LocalFilrerSend,
        inReceved: LocalFilterCompletionScan
    });

    let LocalArrayReverseData = jVarLocalTransformedData.slice().reverse();

    return LocalArrayReverseData;
};

let jFLocalDateWiseCheckCount = ({ inSend, inReceved }) => {
    let data1 = inSend;
    let data2 = inReceved;

    const groupedData = {};

    data1.forEach(item => {
        // const date = item.DateTime?.split('T')[0];
        const date = new Date(item.DateTime).toLocaleDateString('en-GB');
        if (!groupedData[date]) {
            groupedData[date] = {
                Date: date,
                Sent: 0,
                Receved: 0
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
                Receved: 0
            };
        }
        groupedData[date].Receved += 1;
    });
    return Object.values(groupedData);
};

export { StartFunc };
// StartFunc({ inFactory: "Vizag" });
