const StartFunc = ({ inDatedb, inDataToInsert }) => {
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
    LocalReturnData.KTF = true;

    return LocalReturnData;
};

export { StartFunc };