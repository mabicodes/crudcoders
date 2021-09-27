import React from "react";
import "./stylesheet/loginpage.scss";
import background from "./img/image1.jpg";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import { useHistory } from 'react-router-dom';


export const LoginPage = () => {

    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handlePasswordChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const history = useHistory();

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
                                                    <label htmlFor="user" className="loginlabel"  required pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}">Correo Eléctronico</label>
                                                </div>
                                                <div>
                                                    <input type="text" id="user" name="user" />
                                                </div>
                                                <div>
                                                    <label htmlFor="password" className="loginlabel">Contraseña</label>
                                                </div>
                                                <div>
                                                    <Input
                                                        type={values.showPassword ? "text" : "password"}
                                                        onChange={handlePasswordChange("password")}
                                                        value={values.password}
                                                        endAdornment={
                                                            <InputAdornment position="end" id="password">
                                                                <IconButton
                                                                    onClick={handleClickShowPassword}
                                                                    onMouseDown={handleMouseDownPassword}
                                                                >
                                                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                                                </IconButton>
                                                            </InputAdornment>
                                                        }
                                                        pattern="[A-Za-z0-9-]{8,12}"
                                                        required
                                                    />
                                                </div>

                                        <button className="button-login" type="submit" onClick={()=> history.push("/alumnos")} > Sign in </button>
                                    </div>

                                </form>

                        </div>
                    </div>
            </div>
    )
}