import { flamehazesocietyClient } from "."

export const flamehazesocietyLogOut = async () =>{
    try {
        let response = await flamehazesocietyClient.delete('/logout')

        console.log(response);

        return response.data
    } catch (e) {
        console.log(e)
        return ("Something went wrong")
    }
}