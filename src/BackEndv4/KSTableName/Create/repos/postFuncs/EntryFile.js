import {
    PostFunc as PostFuncDal,
    PostFuncGenUuId as PostFuncGenUuIdDal,
    PostWithCheckAndGenPkFunc as PostWithCheckAndGenPkFuncDal,
    PostSendMailGenUuIdFunc as PostSendMailGenUuIdFuncDal,
    PostSendMailFunc as PostSendMailFuncDal,
    PostForTemplateFunc as PostForTemplateFuncDal,
    PostWithReferenceCheckFunc as PostWithReferenceCheckFuncDal,
    PostAsIsFunc as PostAsIsFuncDal,
    PostWithUserFunc as PostWithUserFuncDal,
    PostWithGpsFunc as PostWithGpsFuncDal,
    PostWithUserAndGpsFunc as PostWithUserAndGpsFuncDal
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

let PostFuncGenUuId = async (inPostBody) => {
    if (ConfigJson.isSequelize) {
        return PostFuncDalsForSequelize(inPostBody);
    };

    if (ConfigJson.isMongoDb) {
        return PostFuncDalsForMongoDB(inPostBody);
    };

    return PostFuncGenUuIdDal(inPostBody);
};

let PostWithCheckAndGenPkFunc = async (inPostBody) => {
    if (ConfigJson.isSequelize) {
        return PostFuncDalsForSequelize(inPostBody);
    };

    if (ConfigJson.isMongoDb) {
        return PostFuncDalsForMongoDB(inPostBody);
    };

    return PostWithCheckAndGenPkFuncDal(inPostBody);
};

let PostSendMailGenUuIdFunc = async (inPostBody) => {
    if (ConfigJson.isSequelize) {
        return PostFuncDalsForSequelize(inPostBody);
    };

    if (ConfigJson.isMongoDb) {
        return PostFuncDalsForMongoDB(inPostBody);
    };

    return PostSendMailGenUuIdFuncDal(inPostBody);
};

let PostSendMailFunc = async ({ inPostBody, inDomainName }) => {
    if (ConfigJson.isSequelize) {
        return PostFuncDalsForSequelize(inPostBody);
    };

    if (ConfigJson.isMongoDb) {
        return PostFuncDalsForMongoDB(inPostBody);
    };

    return await PostSendMailFuncDal({ inPostBody, inDomainName });
};

let PostForTemplateFunc = async ({ inPostBody, inDomainName }) => {
    if (ConfigJson.isSequelize) {
        return PostFuncDalsForSequelize(inPostBody);
    };

    if (ConfigJson.isMongoDb) {
        return PostFuncDalsForMongoDB(inPostBody);
    };

    return await PostForTemplateFuncDal({ inPostBody, inDomainName });
};

let PostWithReferenceCheckFunc = async ({ inPostBody, inDomainName }) => {
    if (ConfigJson.isSequelize) {
        return PostFuncDalsForSequelize(inPostBody);
    };

    if (ConfigJson.isMongoDb) {
        return PostFuncDalsForMongoDB(inPostBody);
    };

    return await PostWithReferenceCheckFuncDal({ inPostBody, inDomainName });
};

let PostAsIsFunc = async ({ inPostBody, inDomainName }) => {
    if (ConfigJson.isSequelize) {
        return PostFuncDalsForSequelize(inPostBody);
    };

    if (ConfigJson.isMongoDb) {
        return PostFuncDalsForMongoDB(inPostBody);
    };

    return await PostAsIsFuncDal({ inPostBody, inDomainName });
};

let PostWithUserFunc = async ({ inPostBody, inDomainName }) => {
    if (ConfigJson.isSequelize) {
        return PostFuncDalsForSequelize(inPostBody);
    };

    if (ConfigJson.isMongoDb) {
        return PostFuncDalsForMongoDB(inPostBody);
    };

    return await PostWithUserFuncDal({ inPostBody, inDomainName });
};

let PostWithGpsFunc = async ({ inPostBody, inDomainName }) => {
    if (ConfigJson.isSequelize) {
        return PostFuncDalsForSequelize(inPostBody);
    };

    if (ConfigJson.isMongoDb) {
        return PostFuncDalsForMongoDB(inPostBody);
    };

    return await PostWithGpsFuncDal({ inPostBody, inDomainName });
};

let PostWithUserAndGpsFunc = async ({ inPostBody, inDomainName }) => {
    if (ConfigJson.isSequelize) {
        return PostFuncDalsForSequelize(inPostBody);
    };

    if (ConfigJson.isMongoDb) {
        return PostFuncDalsForMongoDB(inPostBody);
    };

    return await PostWithUserAndGpsFuncDal({ inPostBody, inDomainName });
};

export {
    PostFunc, PostFuncGenUuId, PostWithCheckAndGenPkFunc,
    PostSendMailGenUuIdFunc, PostSendMailFunc, PostForTemplateFunc,
    PostWithReferenceCheckFunc, PostAsIsFunc, PostWithUserFunc, PostWithGpsFunc,
    PostWithUserAndGpsFunc
};