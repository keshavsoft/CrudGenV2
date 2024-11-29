import { StartFunc as BranchDc } from '../CommonFuncs/FromApi/BranchDC.js';
import { StartFunc as BranchScan } from '../CommonFuncs/FromApi/BranchScan.js';
import { StartFunc as EntryScan } from '../CommonFuncs/FromApi/EntryScan.js';
import { StartFunc as EntryCancelScan } from '../CommonFuncs/FromApi/EntryCancelScan.js';

const StartFunc = ({ inFactory }) => {
    const BranchDcdb = BranchDc();
    const BranchScanData = BranchScan();
    const EntryScanData = EntryScan();
    const EntryCancelScanData = EntryCancelScan();

    const LocalFilterBranchDc = BranchDcdb.filter(e => e.Factory === inFactory);

    const TransformedData = MergeFunc({
        BranchDc: LocalFilterBranchDc,
        BranchScan: BranchScanData,
        EntryScan: EntryScanData,
        EntryCancelScan: EntryCancelScanData
    });

    return TransformedData.slice().reverse();
};

const MergeFunc = ({ BranchDc, BranchScan, EntryScan, EntryCancelScan }) => {
    return BranchDc.map(dc => {
        const Sent = BranchScan.filter(qr => qr.VoucherRef == dc.pk).length;
        const Scanned = EntryScan.filter(qr => qr.VoucherRef == dc.pk).length;
        const EntryCancel = EntryCancelScan.filter(qr => EntryScan.some(scan => qr.QrCodeId == scan.QrCodeId)).length;

        return {
            ...dc,
            Sent,
            Scanned,
            Pending: Sent - Scanned,
            EntryCancel,
            TimeSpan: TimeSpan(dc.DateTime)
        };
    });
};

const TimeSpan = DateTime => {
    const diffMs = new Date() - new Date(DateTime);
    const diffMonths = Math.floor(diffMs / 2629800000);
    const diffDays = Math.floor((diffMs % 2629800000) / 86400000);
    const diffHrs = Math.floor((diffMs % 86400000) / 3600000);
    const diffMins = Math.round((diffMs % 3600000) / 60000);

    return diffMonths > 0
        ? `${diffMonths} months, ${diffDays} days, ${diffHrs} hrs, ${diffMins} min`
        : diffDays > 0
            ? `${diffDays} days, ${diffHrs} hrs, ${diffMins} min`
            : diffHrs > 0
                ? `${diffHrs} hrs, ${diffMins} min`
                : `${diffMins} min`;
};

export { StartFunc };
