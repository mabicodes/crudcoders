import React from "react";
import "./stylesheet/loginpage.scss";
import background from "./img/image1.jpg";



export const LoginPage = () => {
    return (
        <div className="login-jsx">
<div className={"background-img"}>
    <img src={background}  />
</div>
        <div className="loginpage-main">
            <div className="loginpage-content">
                <h1>CRUD CODERS</h1>
                    <form>
                        <div className="login-form">
                            <div>
                                <label htmlFor="user" className="loginlabel">Usuario</label>
                            </div>
                            <div>
                                <input type="text" id="user" name="user" />
                            </div>
                            <div>
                                <label htmlFor="password" className="loginlabel">Contraseña</label>
                            </div>
                            <div>
                                <input type="password" id="password" name="password"/>
                            </div>
                            <button className="button-login" type="submit" > Sign in </button>
                        </div>
                    </form>
            </div>
        </div>
</div>


    )
}