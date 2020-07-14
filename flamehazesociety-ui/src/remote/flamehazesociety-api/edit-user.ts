import { flamehazesocietyClient } from ".";


export const flamehazesocietyEditUser = async (userId: number, username?: string, password?: string, firstname?: string, lastname?: string, email?: string, role?:{role:string, roleId:number}) => {

    let editUser = {
        userId,
        username,
        password,
        firstname,
        lastname,
        email,
        role
    }
    try{
        let response = await flamehazesocietyClient.patch(`/users`, editUser)
        console.log(response);
        return response.data
    } catch(e){
        console.log(e);
    }
}