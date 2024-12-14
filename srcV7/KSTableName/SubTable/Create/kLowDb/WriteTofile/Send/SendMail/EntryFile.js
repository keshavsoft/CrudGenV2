import { StartFunc as sendMailCC } from "../../../../../../../../mail/sendMailCC.js";

let StartFunc = async ({ inDataToInsert, inDomainName, inDataPk, inpk }) => {
    
     if ("Email" in inDataToInsert) {
        return await sendMailCC({ CCEmail: inDataToInsert.Email, inDomainName, inDataPk, inpk })
    }
};

export { StartFunc };