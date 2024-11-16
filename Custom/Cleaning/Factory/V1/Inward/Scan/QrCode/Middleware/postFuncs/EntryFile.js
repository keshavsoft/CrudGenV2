let PostFunc = (req, res, next) => {
    let LocalRequestBody = req.body;

    if (Object.keys(LocalRequestBody).length === 0) {
        res.status(404).json({
            KTF: false,
            KReason: "post requst body should contain : ",
            body: {
                "QrCodeId": "",
                "BranchName": "",
                "DCFactory": "",
                "FactoryName":"",
                "VoucherRef": "",
                "DCDate": "",
                "DCDescription": "",
                "DeliveryDate": "",
                "FactorySelected": "",
                "ItemName": "",
                "OrderDate": "",
                "OrderNumber": "",
                "Rate": "",
                "VoucherNumber": ""
            }
        });
        return;
    };

    next();
};

export { PostFunc };
