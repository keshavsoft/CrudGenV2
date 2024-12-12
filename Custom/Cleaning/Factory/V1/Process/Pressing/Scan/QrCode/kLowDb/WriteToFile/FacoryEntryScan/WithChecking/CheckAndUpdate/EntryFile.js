const StartFunc = ({ inDatedb, inDataToInsert, inVoucherRef }) => {
    let LocalQrId = inDataToInsert.QrCodeId;
    let localDate = inDatedb.data;
    let LocalReturnData = { KTF: false };


    let localFindData = localDate.find(loopQr => loopQr.QrCodeId == LocalQrId);

    if (localFindData === undefined) {
        return LocalReturnData;
    };

    if (localFindData.ReWash !== true) {
        return LocalReturnData;
    };

    localFindData.ReWash = false,
    localFindData.VoucherRef = inDataToInsert.VoucherRef,
    LocalReturnData.QrCodeId = localFindData.QrCodeId
    inDatedb.write();
    let localFiterData = localDate.filter(el => el.VoucherRef == inVoucherRef).length;
    LocalReturnData.QrCount = localFiterData;
    LocalReturnData.ScanNo = LocalQrId;
    LocalReturnData.KTF = true;

    return LocalReturnData;
};

export { StartFunc };