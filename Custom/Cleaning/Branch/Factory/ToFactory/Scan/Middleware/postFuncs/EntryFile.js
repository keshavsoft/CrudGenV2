let PostFunc = (req, res, next) => {
    let LocalRequestBody = req.body;

    if (!LocalRequestBody.hasOwnProperty('QrCodeId') || !LocalRequestBody.hasOwnProperty('VoucherRef')) {
        res.status(404).json({
            KTF: false,
            KReason: "post request body should contain both 'QrCodeId' and 'VoucherRef'",
            body: {
                "QrCodeId": "",
                "VoucherRef": ""
            }
        });
        return;
    }

    next();
};

export { PostFunc };
