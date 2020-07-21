import { flamehazesocietyClient } from ".";


export const flamehazesocietyGetAllUsers = async () =>{
    try{
        let response = await flamehazesocietyClient.get('/users')
        return response.data
    }catch(e){
        console.log(e);
        return('Something went wrong')              
    }
}