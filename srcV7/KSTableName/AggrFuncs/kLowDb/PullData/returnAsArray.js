import { StartFunc as StartFuncReturnDbObjectWithSchema } from '../CommonFuncs/ReturnDbObjectWithSchema.js';

let StartFunc = () => {
    const dbFromDbObjectWithSchema = StartFuncReturnDbObjectWithSchema();

    const db = dbFromDbObjectWithSchema.dbObject;

    db.read();

    if ("error" in db.data) {
        return db.data;
    };

    if (Array.isArray(db.data) === false) {
        return false;
    };

    return db.data;
};

export { StartFunc };