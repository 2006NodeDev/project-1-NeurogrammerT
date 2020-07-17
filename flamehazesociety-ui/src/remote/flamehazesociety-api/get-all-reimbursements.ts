import { flamehazesocietyClient } from ".";


export const flamehazesocietyGetAllReimbursements = async () =>{
    try{
        let response = await flamehazesocietyClient.get('/reimbursements')
        return response.data
    }catch(e){
        console.log(e);
        console.log('We should probably handle this');
        
        
    }
}