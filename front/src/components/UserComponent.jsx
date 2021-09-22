import React from "react";
import UserService from "../services/UserService";
import Button from 'react-bootstrap/Button'
import './stylesheet/usercomponent.scss';
import {FormAdd} from "./FormAdd";
import {FormEdit} from "./FormEdit";


class UserComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch('/users') .then(response => response.json())
            .then(data => this.setState({users: data}));

            UserService.getUsers().then((response) => {
                console.log(response.data)
                this.setState({users: response.data})
        });
    }


    render() {

        return (
            <div>
                <h1 className="text-center">
                    <span className="crud">C</span><span>reate</span>
                    <span className="crud">R</span><span>ead</span>
                    <span className="crud">U</span><span>pdate</span>
                    <span className="crud">D</span><span>elete</span>
                </h1>
                <h1 className="h1coders">CODERS</h1>

                <div>
                    <Button variant="outline-dark"> Agregar alumno/a </Button>
                </div>
                <table className="table table-striped">
                    <thead>

                    <tr>
                        <td> ID</td>
                        <td> Nombre</td>
                        <td> Apellido</td>
                        <td> Edad</td>
                        <td> País de origen</td>
                        <td> Nivel de estudios</td>
                        <td> Dirección</td>
                        <td> Promoción</td>
                        <td> Correo Electrónico</td>
                        <td> Acciones</td>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        this.state.users.map(
                            user =>
                                <tr key={user.id}>
                                    <td> {user.id} </td>
                                    <td> {user.studentName} </td>
                                    <td> {user.studentSurname} </td>
                                    <td> {user.studentAge} </td>
                                    <td> {user.countryOrigin} </td>
                                    <td> {user.educationalLevel} </td>
                                    <td> {user.studentAddress} </td>
                                    <td> {user.studentPromotion} </td>
                                    <td> {user.emailAddress}</td>
                                    <td>
                                        <div className={"table-action-buttons"}>
                                            <Button variant="outline-dark"> Actualizar </Button>
                                            <Button variant="outline-dark"> Eliminar </Button>
                                        </div>
                                    </td>
                                </tr>
                        )
                    }

                    </tbody>
                </table>
            </div>
        )
    }
}
export default UserComponent