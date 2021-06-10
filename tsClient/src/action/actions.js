import axios from '../axios'

export const mobileView= (flag)=>{
    return {
        type: "setMobileView",
        payload:flag
    }
}

export const auth = (user,flag)=>{
    console.log(user);
    return {
        type: "isAuth",
        payload: {
            user,
            flag,
        }
    }
}

