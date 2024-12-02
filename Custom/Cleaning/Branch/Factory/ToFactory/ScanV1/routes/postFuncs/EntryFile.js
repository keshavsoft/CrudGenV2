import express from 'express';
var router = express.Router();

import { PostFunc } from "../../controllers/postFuncs/EntryFile.js";

import {
    PostFunc as MiddlewarePostFunc
} from '../../Middleware/postFuncs/EntryFile.js';

router.post('/:inBranch', MiddlewarePostFunc, PostFunc);

export { router };