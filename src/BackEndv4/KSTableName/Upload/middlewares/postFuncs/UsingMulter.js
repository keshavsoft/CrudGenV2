import multer from 'multer';
import path from "path";

import ConfigJson from '../../../../Config.json' assert {type: 'json'};
import acceptFileTypesJson from './acceptFileTypes.json' assert {type: 'json'};

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let LocalUrl = req.originalUrl;
        let LocalUrlArray = LocalUrl.split("/");

        cb(null, `${ConfigJson.JsonPath}/${LocalUrlArray[2]}`);
    },
    filename: function (req, file, cb) {
        let LocalFile = file;
        req.KeshavSoft = {};
        let LocalUuid = uuidv4();

        if (acceptFileTypesJson.includes(LocalFile.mimetype)) {
            let LocalExtensionType = path.parse(LocalFile.originalname).ext;

            req.KeshavSoft.Uuid = `${LocalUuid}.${LocalExtensionType}`;

            cb(null, `${LocalUuid}.${LocalExtensionType}`);
        } else {
            cb(null, LocalFile.originalname);
        };
    }
});

var StartFunc = multer({ storage: storage });

export { StartFunc };
