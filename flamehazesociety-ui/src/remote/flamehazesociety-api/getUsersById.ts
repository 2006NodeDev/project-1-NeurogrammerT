import { flamehazesocietyClient } from "."


export const flamehazesocietyGetUserById = async (userId:number) =>{

    try{
        let response = await flamehazesocietyClient.get(`/users/${userId}`)
        return response.data
    } catch(e){
        console.log(e);
        return('Something went wrong')   
    }
}