import fs from "fs";
const CommonDelete = "Delete";
import { StartFunc as returnTableSchema } from "../returnTableSchema.js";

const StartFunc = ({ inFrom, inTo, inConfigJson, inTableNameWithExtension }) => {
    let LocalFileData = `DELETE http://localhost:${inFrom}/${CommonDelete}/{inPkToBeDeleted}`;
    LocalFileData += `Content-Type: application/json\r\n`;

    let LocalColumnsSchema = returnTableSchema({
        inConfigJson,
        inTableNameWithExtension
    });

    fs.writeFileSync(`${inTo}/Param.http`, `${LocalFileData}\r\n${JSON.stringify(LocalColumnsSchema)}`);
};

export { StartFunc };