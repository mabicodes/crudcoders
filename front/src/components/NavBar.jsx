import React from "react";
import {Link} from "react-router-dom";

export const NavBar = () => {

    return (

            <div>
                <button>
                    <Link to="/iniciarsesion"> Inicio Sesión </Link>
                </button>
                <button>
                    <Link to="/alumnos"> Tabla de alumnos </Link>
                </button>
            </div>







    )}