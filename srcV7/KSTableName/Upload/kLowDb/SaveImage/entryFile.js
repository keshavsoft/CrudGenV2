import fs from "fs";
import path from "path";

import ConfigJson from '../../../../Config.json' with {type: 'json'};
import tableNameJson from '../../../tableName.json' with {type: 'json'};

let StartFunc = ({ inImageData, inRowPk }) => {
    var base64Data = inImageData;
    let base64Image = base64Data.split(';base64,').pop();

    try {
        fs.writeFileSync(`${ConfigJson.jsonConfig.DataPath}/${ConfigJson.jsonConfig.DataPk}/${path.parse(tableNameJson.tableName).name}/${inRowPk}.png`, base64Image, 'base64');
        return true;
    } catch (error) {
        return false;
    };
};

export { StartFunc };
