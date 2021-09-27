import React from "react";
import UserService from "../services/UserService";
import Button from 'react-bootstrap/Button'
import './stylesheet/usercomponent.scss';
import Modal from 'react-bootstrap/Modal';
import {Form} from "react-bootstrap";

class UserComponent extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            modalOpen: false,
            users: []
        }
        this.handleAddStudent = this.handleAddStudent.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    componentDidMount() {
        fetch('/users') .then(response => response.json())
            .then(data => this.setState({users: data}));

        UserService.getUsers().then((response) => {
            console.log(response.data)
            this.setState({users: response.data})
        });
    }
    handleAddStudent (e) {
        e.preventDefault();
        const newUser = {
            studentName: e.target.studentName.value,
            studentSurname: e.target.studentSurname.value,
            studentAge: e.target.studentAge.value,
            countryOrigin: e.target. countryOrigin.value,
            educationalLevel: e.target.educationalLevel.value,
            studentAddress: e.target.studentAddress.value,
            studentPromotion: e.target.studentPromotion.value,
            emailAddress: e.target.emailAddress.value,
        }
        UserService.addStudent(newUser)
            .then(response => {
                const copyUsers = [...this.state.users];
                // Adds the student to the first position of an array
                copyUsers.unshift(response.data);
                this.setState({
                    modalOpen: false,
                    users: copyUsers
                })
                console.log(this.state.users);
                })
                .catch(error => {
                    console.log(error);
                })
    }
    handleOnChange(){

    }


   handleDeleteUser (id) {
        UserService.deleteUser(id)
            .then(response => {
                this.setState({
                    users: this.state.users.filter(user => user.id !== id)
                })
            })
            .catch(() => {
                console.log('error')
                // when errror
            })
    }

    render() {

        return (

            <div className="motherdiv">

                <Modal
                    show={this.state.modalOpen}
                    size="lg"
                    centered
                    onHide={() => this.setState({modalOpen: false})}
                >
                    <Modal.Header>
                        <Modal.Title>
                            Agregar alumno
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.handleAddStudent}>
                            <Form.Group>
                                <Form.Label>
                                    Nombre
                                </Form.Label>
                                <Form.Control name="studentName" required />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    Apellido
                                </Form.Label>
                                <Form.Control name="studentSurname" required/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    Edad
                                </Form.Label>
                                <Form.Control name="studentAge" required />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    País de origen
                                </Form.Label>
                                <Form.Control name="countryOrigin" required />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    Nivel de estudios
                                </Form.Label>
                                <Form.Control name="educationalLevel" required />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    Dirección
                                </Form.Label>
                                <Form.Control name="studentAddress" required  />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Promoción</Form.Label>
                                <Form.Control name="studentPromotion" required/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Correo Electrónico</Form.Label>
                                <Form.Control name="emailAddress" required pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}" />
                            </Form.Group>
                            <Button className="mt-3" variant="success" type="submit">
                                Guardar
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>

                <Modal>
                    <Modal.Header>
                        <Modal.Title>
                            Agregar alumno
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.handleUpdateUser}>
                            <Form.Group>
                                <Form.Control name="studentName" placeholder="Nombre" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control name="studentSurname" placeholder="Apellido" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control name="studentAge" placeholder="Edad" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control name="countryOrigin" placeholder="pais" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control name="educationalLevel" placeholder="ESO" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control name="studentAddress" placeholder="Donde vive" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control name="studentPromotion" placeholder="que promocion pertenece" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control name="emailAddress" placeholder="correo eelectronico" />
                            </Form.Group>
                            <Button className="mt-3" variant="success" type="submit">
                                Guardar
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>

                <h1 className="text-center">
                    <span className="crud">C</span><span>reate</span>
                    <span className="crud">R</span><span>ead</span>
                    <span className="crud">U</span><span>pdate</span>
                    <span className="crud">D</span><span>elete</span>
                </h1>
                <h1 className="h1coders">CODERS</h1>

                <div>
                    <Button className="agregar" onClick={() => this.setState({modalOpen: true})} variant="outline-dark">
                        Agregar alumno/a
                    </Button>
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
                                            <Button variant="outline-dark" > Actualizar </Button>
                                            <Button
                                                onClick={() => this.handleDeleteUser(user.id)}
                                                variant="outline-dark"
                                            >
                                                Eliminar
                                            </Button>
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