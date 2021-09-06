import React from "react";
import "./stylesheet/loginpage.css";




export const LoginPage = () => {
    return (

        <div className="loginpage-main">

                <h1>Home page</h1>
                <form>
                    <div className="form">
                        <div>
                            <label htmlFor="usuario">Usuario</label>
                            <input type="text" id="usuario" name="usuario" placeholder="Enter Usuario"/>
                        </div>
                        <div>
                            <label htmlFor="password">Contraseña</label>
                            <input type="text" id="password" name="password"/>
                        </div>
                    </div>
                    <button className="form-login" type="submit" > Sign in </button>
                </form>
        </div>


    )
}