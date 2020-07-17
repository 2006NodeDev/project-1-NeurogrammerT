import React, { FunctionComponent, SyntheticEvent } from 'react'
import Axios from 'axios'


export const LogoutComponent: FunctionComponent<any> = (props) => {

    let userSession = 'http://localhost:2020/logout'

    console.log(userSession);

    const logoutUser = async (e: SyntheticEvent) => {

        Axios.delete(userSession)

        props.history.push(`/home`)
    } 


    return (
        <div>
            <button id='logout' onClick={logoutUser}>Logout</button>
        </div>
    )
}