import axios from '../axios'
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from './actionType';


export const fakeAuth = async(dispatch) => {
    dispatch({ type: LOGIN_REQUEST })
    try {
        const authToken = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('fake_token')
            }, 1000)
        })
        dispatch({ type: LOGIN_SUCCESS , payload : authToken})
    } catch (err) {
        dispatch({ type: LOGIN_FAIL , payload : err})
    }
}

