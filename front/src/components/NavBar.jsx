import React from "react";
import {Link} from "react-router-dom";

export const NavBar = () => {

    return (

            <div>
                <button>
                    <Link to="/iniciarsesion" target="_blank"> Inicio Sesión </Link>
                </button>
                <button>
                    <Link to="/alumnos" target="_blank"> Tabla de alumnos </Link>
                </button>
            </div>







    )}