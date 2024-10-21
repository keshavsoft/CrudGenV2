import { StartFunc as StartFuncInitializeSequelizeWithTableName } from '../modals/initializeSequelizeWithTableName.js';

let StartFunc = async () => {
    let LocalReturnObject = {};
    LocalReturnObject.KTF = false;
    LocalReturnObject.JsonData = [];

    try {
        const LocalTableData = await StartFuncInitializeSequelizeWithTableName();

        const users = await LocalTableData.findAll();

        const records = users.map(function (result) {
            return result.dataValues;
        });

        LocalReturnObject.KTF = true;
        LocalReturnObject.JsonData = records;

        return await LocalReturnObject;
    } catch (error) {
        return await {
            KTF: false,
            KReason: { ErrorFrom: process.cwd(), sequelizeError: error },
        };
    };
};

export { StartFunc };