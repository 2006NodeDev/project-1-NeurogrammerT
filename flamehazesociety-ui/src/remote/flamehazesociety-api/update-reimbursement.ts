import { flamehazesocietyClient } from ".";
import { Reimbursement } from "../../models/Reimbursement";


export const flamehazesocietyUpdateReimbursement = async (editReimbursement:Reimbursement) => {

    try{
        let response = await flamehazesocietyClient.patch(`/reimbursements`, editReimbursement)
        console.log(response);
        return response.data
    } catch(e){
        console.log(e);
    }
}