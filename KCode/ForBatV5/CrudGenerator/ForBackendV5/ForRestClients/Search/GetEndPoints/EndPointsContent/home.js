import fs from "fs";
const CommonSearch = "Search";

const StartFunc = ({ inFrom, inTo }) => {
    let LocalFileData = `GET http://localhost:${inFrom}/${CommonSearch}`;

    fs.writeFileSync(`${inTo}/home.http`, LocalFileData);
};

export { StartFunc };