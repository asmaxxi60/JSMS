import react, { useState } from "react";

import LoginUserContext from "./LoginUserContext";

const LoginUserState=(props)=>{
    const [loginuser, setloginuser] = useState({"username": "arvind",
    "pwd": "arvind"})
    


    return (
        <LoginUserContext.Provider value={loginuser}>
            {props.children}
        </LoginUserContext.Provider>
    )

}

export default LoginUserState;