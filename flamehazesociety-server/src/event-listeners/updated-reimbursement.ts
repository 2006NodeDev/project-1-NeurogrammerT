import { expressEventEmitter, customExpressEvents } from ".";
import { userTopic } from "../messaging";
import { Reimbursement } from "../models/Reimbursement";


expressEventEmitter.on(customExpressEvents.UPDATED_REIMBURSEMENT, (updatedReimbursement: Reimbursement) => {
    
    setImmediate(async () => {
        try {
            let res = await userTopic.publishJSON(updatedReimbursement)
            console.log(res);
            
        } catch (e) {
            console.log(e);
            
        }
    })
})