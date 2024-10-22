import { StartFunc as QrCodes } from './QrCodes.js';
import { StartFunc as BranchScan } from './BranchScan.js';
import { StartFunc as EntryScan } from './EntryScan.js';
import { StartFunc as WashingScan } from './WashingScan.js';
import { StartFunc as PressingScan } from "./PressingScan.js";
import { StartFunc as CompletionScan } from "./CompletionScan.js";

let StartFunc = ({ inQr }) => {
    let LocalQr = inQr;
    const QrCodeData = QrCodes();
    const BranchScanData = BranchScan();
    const EntryScanData = EntryScan();
    const WashingScanData = WashingScan();
    const PressingScanData = PressingScan();
    const CompletionScanData = CompletionScan();

    let jVarLocalTransformedData = jFLocalMergeFunc({
        inQrData: QrCodeData,
        inScandata: BranchScanData,
        inEntryScanData: EntryScanData,
        inWashingScanData: WashingScanData,
        inPressingScanData: PressingScanData,
        inCompletionScanData: CompletionScanData,
        inQr: LocalQr
    });

    return jVarLocalTransformedData;
};

const jFLocalMergeFunc = ({ inQrData, inScandata, inEntryScanData, inWashingScanData, inPressingScanData, inCompletionScanData, inQr }) => {
    const LocalQr = parseFloat(inQr);

    const jVarLocalReturnObject = inQrData.find(loopQr => {
        if (loopQr.pk === LocalQr) {
            const match = inScandata.some(loopScan => loopScan.QrCodeId == LocalQr);
            const LoopInsideFindEntryScan = inEntryScanData.some(loopScan => loopScan.QrCodeId == LocalQr);
            const LoopInsideFindWashingScan = inWashingScanData.some(loopScan => loopScan.QrCodeId == LocalQr);
            const LoopInsideFindPressingScan = inPressingScanData.some(loopScan => loopScan.QrCodeId == LocalQr);
            const LoopInsideFindCompletionScan = inCompletionScanData.some(loopScan => loopScan.QrCodeId == LocalQr);

            loopQr.Status = {
                FromBranch: match,
                ToFactory: LoopInsideFindEntryScan,
                Washing: LoopInsideFindWashingScan,
                Pressing: LoopInsideFindPressingScan,
                Completion: LoopInsideFindCompletionScan
            };

            return loopQr;
        }
        return "No Data";
    });

    return jVarLocalReturnObject;
};

export { StartFunc };
