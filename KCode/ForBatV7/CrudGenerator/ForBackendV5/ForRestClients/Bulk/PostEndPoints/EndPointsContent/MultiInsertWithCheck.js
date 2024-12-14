import fs from "fs";
import { StartFunc as returnTableSchema } from "../returnTableSchema.js";

const CommonBulk = "Bulk";
const CommonEndPointEnd = "MultiInsertWithCheck";

const StartFunc = ({ inFrom, inTo, inConfigJson, inTableNameWithExtension }) => {
    let LocalFileData = `POST http://localhost:${inFrom}/${CommonBulk}/${CommonEndPointEnd}\r\n`;
    LocalFileData += `Content-Type: application/json\r\n`;

    let LocalColumnsSchema = returnTableSchema({
        inConfigJson,
        inTableNameWithExtension
    });

    let LocalBodyAsArray = [];
    LocalBodyAsArray.push(LocalColumnsSchema);
    LocalBodyAsArray.push(LocalColumnsSchema);

    fs.writeFileSync(`${inTo}/${CommonEndPointEnd}.http`, `${LocalFileData}\r\n${JSON.stringify(LocalBodyAsArray)}`);
};

export { StartFunc };