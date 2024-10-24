let StartFunc = ({ inQrData, inScandata, inEntryScanData, inWashingScanData, inPressingScanData, inCompletionScanData, inPressingRejectScanData }) => {
    let jVarLocalReturnObject = inQrData.map(loopQr => {
        const match = inScandata.some(loopScan => loopScan.QrCodeId == loopQr.pk);
        const LoopInsideFindEntryScan = inEntryScanData.some(loopScan => loopScan.QrCodeId == loopQr.pk);
        const LoopInsideFindWashingScan = inWashingScanData.some(loopScan => loopScan.QrCodeId == loopQr.pk);
        const LoopInsideFindPressingScan = inPressingScanData.some(loopScan => loopScan.QrCodeId == loopQr.pk);
        const LoopInsideFindCompletionScan = inCompletionScanData.some(loopScan => loopScan.QrCodeId == loopQr.pk);
        const LoopInsideFindPressingRejectScan = inPressingRejectScanData.some(loopScan => loopScan.QrCodeId == loopQr.pk);
        return {
            QrCodeId: loopQr.pk,
            ItemName: loopQr.ItemName,
            Rate: loopQr.Rate,
            FactorySelected: loopQr.FactorySelected,
            OrderNo: loopQr.GenerateReference.ReferncePk,
            DeliveryDateTime: loopQr.DeliveryDateTime,
            location: loopQr.location,
            OrderDateTime: loopQr.BookingData.OrderData.Currentdateandtime,
            Status: match,
            FactoryScan: LoopInsideFindEntryScan,
            WashingScan: LoopInsideFindWashingScan,
            PressingScan: LoopInsideFindPressingScan,
            PressingRejectScan: LoopInsideFindPressingRejectScan,
            CompletionScan: LoopInsideFindCompletionScan,
            BranchName: loopQr.BookingData.OrderData.BranchName,
            EntryScan_FactoryName: loopQr.FactoryName,
            TimeSpan: TimeSpan({ DateTime: loopQr.BookingData.OrderData.Currentdateandtime })
        };
    });


    return jVarLocalReturnObject;
};

function TimeSpan({ DateTime }) {
    var diffMs = new Date() - new Date(DateTime);
    var diffMonths = Math.floor(diffMs / 2629800000); // approximate months (30.44 days)
    var diffDays = Math.floor((diffMs % 2629800000) / 86400000);
    var diffHrs = Math.floor((diffMs % 86400000) / 3600000);
    var diffMins = Math.round((diffMs % 3600000) / 60000);

    if (diffMonths > 0) {
        return diffMonths + " months, " + diffDays + " days, " + diffHrs + " hours, " + diffMins + " min";
    } else if (diffDays > 0) {
        return diffDays + " days, " + diffHrs + " hours, " + diffMins + " min";
    } else if (diffHrs > 0) {
        return diffHrs + " hours, " + diffMins + " min";
    } else {
        return diffMins + " min";
    }
}

export { StartFunc };
