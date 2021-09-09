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
                <h1 className="login-crud">
                    <span className="crud">C</span><span>reate</span>
                    <span className="crud">R</span><span>ead</span>
                    <span className="crud">U</span><span>pdate</span>
                    <span className="crud">D</span><span>elete</span>
                </h1>
                <h1 className="login-coders">CODERS</h1>

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