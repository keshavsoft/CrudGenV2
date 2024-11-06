import {
    PostFunc as PostFuncDal,
    PostImageUsingMulterFunc as PostImageUsingMulterFuncDal,
    PostImageAndMailFunc as PostImageAndMailFuncDal,
    PostImageAsBase64Func as PostImageAsBase64FuncDal

} from '../../dals/postFuncs/EntryFile.js';

import {

    PostFunc as PostFuncDalsForSequelize
} from '../../dalsForSequelize/postFuncs/EntryFile.js';

import {
    PostFunc as PostFuncDalsForMongoDB
} from '../../dalsForMongoDb/postFuncs/EntryFile.js';

import ConfigJson from '../../../../Config.json' assert {type: 'json'};

let PostFunc = async (inPostBody) => {
    if (ConfigJson.isSequelize) {
        return await PostFuncDalsForSequelize(inPostBody);
    };

    if (ConfigJson.isMongoDb) {
        return PostFuncDalsForMongoDB(inPostBody);
    };

    return PostFuncDal(inPostBody);
};

let PostImageAsBase64Func = async ({ inPostBody }) => {
    return PostImageAsBase64FuncDal({ inPostBody });
};

let PostImageUsingMulterFunc = async (inPostBody) => {
    if (ConfigJson.isSequelize) {
        return await PostFuncDalsForSequelize(inPostBody);
    };

    if (ConfigJson.isMongoDb) {
        return PostFuncDalsForMongoDB(inPostBody);
    };

    return PostImageUsingMulterFuncDal(inPostBody);
};

let PostImageAndMailFunc = async (inPostBody) => {
    if (ConfigJson.isSequelize) {
        return await PostFuncDalsForSequelize(inPostBody);
    }

    if (ConfigJson.isMongoDb) {
        return PostFuncDalsForMongoDB(inPostBody);
    }

    return PostImageAndMailFuncDal(inPostBody);
};

export {
    PostFunc, PostImageUsingMulterFunc, PostImageAndMailFunc, PostImageAsBase64Func
};
