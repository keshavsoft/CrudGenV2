import { StartFunc as BranchDc } from '../CommonFuncs/FromApi/BranchDC.js';
import { StartFunc as EntryScan } from '../CommonFuncs/FromApi/EntryScan.js';

const StartFunc = ({ inFactory }) => {
    const BranchDcData = BranchDc();
    const EntryScanData = EntryScan();

    const FilteredBranchDc = BranchDcData.filter(e => e.Factory === inFactory);

    const TransformedData = MergeFunc({
        BranchDc: FilteredBranchDc,
        EntryScan: EntryScanData
    });

    return TransformedData.slice().reverse();
};

const MergeFunc = ({ BranchDc, EntryScan }) => {
    return BranchDc.map(dc => {
        const FilteredData = EntryScan.filter(qr => qr.VoucherRef == dc.pk);
        return {
            ...dc,
            ItemDetails: FilteredData.length,
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

    if (diffMonths > 0) {
        return `${diffMonths} months, ${diffDays} days, ${diffHrs} hours, ${diffMins} min`;
    } else if (diffDays > 0) {
        return `${diffDays} days, ${diffHrs} hours, ${diffMins} min`;
    } else if (diffHrs > 0) {
        return `${diffHrs} hours, ${diffMins} min`;
    } else {
        return `${diffMins} min`;
    }
};

export { StartFunc };
