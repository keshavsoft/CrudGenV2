import express from 'express';

var router = express.Router();

import {
    PostFunc, PostImageUsingMulterFunc, PostImageAndMailFunc, PostImageAsBase64Func
} from '../../controllers/postFuncs/EntryFile.js';

import {
    StartFunc as middlewareUsingMulter
} from '../../middlewares/postFuncs/UsingMulter.js';

router.post('/', PostFunc);
router.post('/ImageAsBase64', PostImageAsBase64Func);
router.post('/ImageUsingMulter', middlewareUsingMulter.single("image"), PostImageUsingMulterFunc);
router.post('/ImageAndMail', middlewareUsingMulter.single("image"), PostImageAndMailFunc);
router.post('/', PostFunc);

export { router };
