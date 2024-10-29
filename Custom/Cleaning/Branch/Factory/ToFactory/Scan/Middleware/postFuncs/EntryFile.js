let PostFunc = (req, res, next) => {
    let LocalRequestBody = req.body;

    if (Object.keys(LocalRequestBody).length === 0) {
        res.status(404).json({
            KTF: false,
            KReason: "post requst body should contain : ",
            body: {
                "QrCodeId": ""
            }
        });
        return;
    };

    next();
};

export { PostFunc };
