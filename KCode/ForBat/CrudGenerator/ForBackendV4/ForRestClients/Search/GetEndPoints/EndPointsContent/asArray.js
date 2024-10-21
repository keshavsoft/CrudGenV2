import fs from "fs";
const CommonSearch = "Search";
const CommonEndPoint = "AsArray";

const StartFunc = ({ inFrom, inTo }) => {
    let LocalFileData = `GET http://localhost:${inFrom}/${CommonSearch}/${CommonEndPoint}`;

    fs.writeFileSync(`${inTo}/${CommonEndPoint}.http`, LocalFileData);
};

export { StartFunc };