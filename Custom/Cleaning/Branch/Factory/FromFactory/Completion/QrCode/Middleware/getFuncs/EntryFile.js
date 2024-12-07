let GetFuncs = (req, res, next) => {
    let LocalRequestParam = req.params.inBranchName;

    if (LocalRequestParam === "") {
        res.status(404).json({
            KTF: false,
            KReason: "get requst Param BranchName Must... : "
        });
        return;
    };

    next();
};

export { GetFuncs };
