import { GetFunc as GetFuncRepo } from '../../repos/getFuncs/EntryFile.js';

let GetFunc = (req, res) => {
    GetFuncRepo({
        inResponse: res,
        callback: (data) => {
            console.log("hhhhhhhh:", data);
        }
    });
};

export {
    GetFunc
};