import React from "react";
import UserService from "../services/UserService";
import {Button} from 'reactstrap';


class UserComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        UserService.getUsers().then((response) => {
            this.setState({users: response.data})
        });
    }

    render() {
        return (
            <div>
                <h1 className="text-center"> CRUD CODERS </h1>

                <div>
                    <Button variant="warning"> + </Button>
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
                                        <Button variant="primary"> Actualizar </Button>
                                        <Button variant="danger"> Borrar </Button>
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