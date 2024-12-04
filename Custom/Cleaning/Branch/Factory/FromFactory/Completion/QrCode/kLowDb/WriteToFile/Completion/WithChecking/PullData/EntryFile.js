import { StartFunc as ReturnDbObjectWithSchema } from "../../../../../../../../../../../../binV4/F_F_Completion_Scan/Create/kLowDb/CommonFuncs/ReturnDbObjectWithSchema.js";

let StartFunc = () => {
    const LocalFromKLowDb = ReturnDbObjectWithSchema();

    return LocalFromKLowDb;
};

export { StartFunc };