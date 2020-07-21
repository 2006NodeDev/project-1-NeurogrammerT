import { flamehazesocietyClient } from "."
import { fhsBaseUrl } from "../../environment";

export const flamehazesocietyLogOut = async () =>{
    try {
        let response = await flamehazesocietyClient.delete(`${fhsBaseUrl}/logout`)

        console.log(response);

        return response.data
    } catch (e) {
        console.log(e)
        return ("Something went wrong")
    }
}