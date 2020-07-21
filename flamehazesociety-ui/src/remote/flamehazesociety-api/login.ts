import { flamehazesocietyClient } from "."

export const flamehazesocietyLogin = async (username:string, password:string) => {
    let credentials = {
        username,
        password
    }
    try{
        let response = await flamehazesocietyClient.post('/login', credentials)
        console.log(response);
        return response.data
    } catch(e){
        console.log(e);
        return('Something went wrong')
    }
}