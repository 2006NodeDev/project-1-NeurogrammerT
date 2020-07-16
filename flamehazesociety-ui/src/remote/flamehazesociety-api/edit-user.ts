import { flamehazesocietyClient } from ".";
import { User } from "../../models/User";


export const flamehazesocietyEditUser = async (editUser:User) => {

    try{
        let response = await flamehazesocietyClient.patch(`/users`, editUser)
        console.log(response);
        return response.data
    } catch(e){
        console.log(e);
    }
}