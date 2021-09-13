import React from "react";
import "./stylesheet/loginpage.scss";
import background from "./img/image1.jpg";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";


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
                                                    />
                                                </div>

                                        <button className="button-login" type="submit" > Sign in </button>
                                    </div>

                                </form>

                        </div>
                    </div>
            </div>
    )
}