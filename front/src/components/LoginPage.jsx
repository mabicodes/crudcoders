import React from "react";
import "./stylesheet/loginpage.scss";




export const LoginPage = () => {
    return (

        <div className="loginpage-main">
            <div className="loginpage-content">
                <h1>CRUD CODERS</h1>
                    <form>
                        <div className="form">
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
                                <input type="text" id="password" name="password"/>
                            </div>
                        </div>
                        <button className="form-login" type="submit" > Sign in </button>
                    </form>
            </div>
        </div>


    )
}